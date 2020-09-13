import React, { useEffect, useState } from 'react';
import { app } from '../base.js';

// contextの作成
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    // const [pending, setPending] = useState(true);

    // loginさせる関数
    const login = async(email, password, history) => {
        try {
            await app.auth().signInWithEmailAndPassword(email, password);
            history.push('/');
        } catch(error) {
            alert(error);
        }
    };

    // signUpさせる関数
    const signup = async (email, password, history) => {
        try {
          await app.auth().createUserWithEmailAndPassword(email, password);
          history.push("/");
        } catch (error) {
          alert(error);
        }
      };
    
      useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
      }, []);
    
    return (
        <AuthContext.Provider
            value={{ 
                login: login,
                signup: signup,
                currentUser
            }}
        >
            { children }
        </AuthContext.Provider>
    );
    /*useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user);
            setPending(false);
        });
    }, []);

    if (pending) {
        return <>Loading...</>
    }

    return (
        <AuthContext.Provider
            value={{ currentUser }}
        >
            { children }
        </AuthContext.Provider>
    );*/
};