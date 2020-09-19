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
      this.set('isLoggedIn', true);
      const login = await axios.post('http://localhost:8000/api/user/', {
        email,
        password
      }).then((response) => {
        console.log(response);
      })

      console.log(login);
  
      return true;
    };

    signUp = async (username, email, password) => {
      this.set('isLoggedIn', true);
      await axios.post('http://localhost:8000/api/register/user/', {
          email,
          password
      }).then((response)=>{
          this.token = response.data.token
      })
    }

    /** token保持 */
    token = ''
  
    logout = async () => {
      if (this.isLoggedIn()) {
        this.set('isLoggedIn', false);
  
        // ログアウト処理
        // 他に必要な処理があるのならこちら
      }
    };
}
  
  export default new User();