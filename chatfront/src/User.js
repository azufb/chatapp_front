import axios from "axios";
class User {
    isLoggedIn = () => this.get('isLoggedIn') === 'true';
  
    set = (key, value) => localStorage.setItem(key, value);
  
    get = key => this.getLocalStorage(key);
  
    getLocalStorage = key => {
      const ret = localStorage.getItem(key);
      if (ret) {
        return ret;
      }
      return null;
    };
  
    login = async (email, password) => {
      await axios.post('http://localhost:8000/api/auth/user/', {
        email,
        password
      }).then((response) => {
        console.log(response);
        this.set('isLoggedIn',response.data.token)
      })
    };

     signUp = async (username, email, password, callback ) => {
      try{
        this.set('username',username)
        const data = { email,password };
        const response = await fetch('http://localhost:8000/api/register/user/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        const responseData = await response.json()
        if(responseData.detail){
          alert('ユーザーの作成に失敗しました。')
          return
        }else{
          this.set('isLoggedIn', responseData.token);
          callback()
        }
      }catch(e){
        console.log(e)
      }
    }
  
    logout = async () => {
      if (this.isLoggedIn()) {
        this.set('isLoggedIn', false);
      }
    };
}
  
  export default new User();