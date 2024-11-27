import React, { useState } from 'react'
import Wrapper from './Wrapper.tsx'

const NotAuthentication = () => {
    const[activeUser,setActiveUser]=useState(0)
  return (
  
    <div>
    
     <Wrapper setActiveUser={setActiveUser} activeUser={activeUser}/>

    </div>
  )
}

export default NotAuthentication
