import React, {useContext} from 'react';
import { Redirect, Route } from 'react-router-dom';
import {AuthContext} from './AuthService'

const LoggedInRoute = ({component:Component,...other}) =>{
  const {userToken} =  useContext(AuthContext)
  return(
    <Route
      {...other}
      render={(props)=> userToken ? <Component {...props}/> : <Redirect to={ '/login' } />}
    />
  )
}
  

export default LoggedInRoute;