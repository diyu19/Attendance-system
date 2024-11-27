import React from 'react'
import Dashboard from '../admin/Dashboard.tsx'
import TeaDashboard from '../teacher/Dashboard.tsx'
import StudDashboard from '../student/Dashboard.tsx'
type propType={
    setActiveUser:(val:number)=>void
    activeUser:number
}
const Wrapper = ({setActiveUser,activeUser}:propType) => {
    const user=0

  return (
    <div>
        {activeUser==0 && <Dashboard/>}
        {activeUser==1 && <TeaDashboard/>}
        {activeUser==2 && <StudDashboard/>}
      
    </div>
  )
}

export default Wrapper
