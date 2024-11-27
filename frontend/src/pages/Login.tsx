import React from 'react'
import style from "./index.module.css"
import Navbar from '../component/Navbar.tsx'
const Login = () => {
  return (
    <div>
      <Navbar/>
     <div className={style.LoginPage}>
      <div className={style.centerContent}>
        <h3>User Login </h3>
        <p className={style.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <select className={style.centerSelect}>
          <option >Select Your Role</option>
          <option>Teacher</option>
          <option>Student</option>
        </select>
        <input type="text" placeholder='Enter Your Name'/>
        <input type="password" placeholder='Enter Your Password'/>
        <button className={style.btnSubmit}>Submit</button>
        <p>Don't Have Account? <a href='/signup' className={style.signUp}>Sign Up</a></p>

      </div>
     </div>
    </div>
  )
}

export default Login
