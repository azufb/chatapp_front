import React, { Component } from 'react';
import axios from 'axios';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            isSignUp: true,
            token: null,
            error: ''
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        this.auth()
        event.preventDefault();
    }

    switchAuthModeHandler = () => {
        this.setState({ isSignUp: !this.state.isSignUp });
    }

    auth = () => {
        // 認証データ
        const authDate = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        }

        // signIn用のAPIキー
        let url = '';
        // signUp用のAPIキー
        if (this.state.isSignUp) {
            url = '';
        }
        
        axios.post(url, authDate)
            .then(response => {
                // 返ってきたトークンをローカルストレージに格納する
                localStorage.setItem('token', response.data.idToken);
            })
            .catch(error => {
                // Firebase側で用意されているエラーメッセージを格納する
                this.setState({ error: error.response.data.error.message });
            })
    }

    logout = () => {
        localStorage.removeItem('token');
    }

    render() {
        return (
            <div>
                <form method='post' onSubmit={ this.handleSubmit }>
                    <div>
                        <input type='text' name='email' onChange={ this.handleChange } /><br />
                        <input type='password' name='password' onChange={ this.handleChange } />
                    </div>
                    <button>SUBMIT</button>
                </form>

                {/* signUp、signInボタンの設置 */}
                <button onClick={ this.switchAuthModeHandler }>
                    SWITCH TO { this.state.isSignUp ? 'SignIn':'SignUp' }
                </button><br />
                {/* ログインしている場合だけログアウトボタンを表示 */}
                { localStorage.getItem('token') && <button onClick={ this.logout }>LOGOUT</button>}
            </div>
        )
    }
}

export default Auth;