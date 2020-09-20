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
      const login = await axios.post('http://localhost:8000/api/auth/user/', {
        email,
        password
      }).then((response) => {
        console.log(response);
      })

      console.log(login);
  
      return true;
    };

    signUp = async (username, email, password) => {
      this.set('username',username)
      const data = { email,password };
      fetch('http://localhost:8000/api/register/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response =>response.json())
      .then(data => {
        this.set('isLoggedIn', data.token);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  
    logout = async () => {
      if (this.isLoggedIn()) {
        this.set('isLoggedIn', false);
      }
    };
}
  
  export default new User();