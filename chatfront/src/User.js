// Login処理、Logout処理、ログイン状態の確認処理を記述。

class User {
    isLoggedIn = () => this.get('isLoggedIn') === true;

    set = (key, value) => localStorage.setItem(key, value);

    get = key => this.getLocalStorage(key);

    getLocalStorage = key => {
        const ret = localStorage.getItem(key);
        if (ret) {
            return ret;
        }
        return null;
    };

    login = async(email, password) => {
        this.set('isLoggedIn', true);
        return true;
    };

    logout = async() => {
        if (this.isLoggedIn()) {
            this.set('isLoggedIn', false);
        }
    };
}

export default new User();