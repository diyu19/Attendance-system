import React from 'react'
import style from "./index.module.css"
import Navbar from '../component/Navbar.tsx'
const SignUp = () => {
  return (
    <div>
      <div>
        <Navbar/>
     <div className={style.LoginPage}>
      <div className={style.centerContent}>
        <h3>Register User </h3>
        <p className={style.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <select className={style.centerSelect}>
        <option>Select Your Std</option>
        <option>5th Std</option>
        <option>6th Std</option>
        <option>7th Std</option>
        <option>8th Std</option>
        <option>9th Std</option>
        <option>10th Std</option>
       </select>
       <input type="text" placeholder='Enter Full Name'/>
       <input type="email" placeholder='Enter Email'/>
       <input type="contact" placeholder='Enter Phone Number'/>
       <input type="password" placeholder='Create New Password'/>
       <input type="password" placeholder='Confirm  Password'/>
      
       
       
        <button className={style.btnSubmit}>Submit</button>
        <p>Already Have Account? <a href='/login' className={style.signUp}>Login</a></p>

      </div>
     </div>
    </div>
      
    </div>
  )
}

export default SignUp
