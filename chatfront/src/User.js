// import React from 'react'
// import axios from "axios";
// import { AuthContext } from "./AuthService";

// const User =()=>{
//   const {setUser} =React.useContext(AuthContext)
      
//     const login = async (email, password) => {
//       await axios.post('http://localhost:8000/api/auth/user/', {
//         email,
//         password
//       }).then((response) => {
//         console.log(response);
//         setUser(response.data.token)
//       })
//     };

//     const signUp = async (username, email, password) => {
//       const data = { email,password };
//       fetch('http://localhost:8000/api/register/user/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       })
//       .then(response =>response.json())
//       .then(data => {
//         setUser(data.token);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//     }
  
//     const logout = async () => {
//       if (this.isLoggedIn()) {
//         this.set('isLoggedIn', false);
//       }
//     };
// }

  
//   export default User