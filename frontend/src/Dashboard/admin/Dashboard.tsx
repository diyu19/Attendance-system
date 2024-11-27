import React, { useState } from 'react'
import style from "../style.module.css"

import ManageStudent from './ManageStudent.tsx';
import ManageTeacher from './ManageTeacher.tsx';
import Settings from './Settings.tsx';
import Home from './Home.tsx';
const Dashboard = () => {
    const[activeTab,seActiveTab]=useState(0)
  return (
    <div>
    <div className={style.container}>
        <div className={style.Content}>
            <div className={style.Sidebar}>
                <div className={style.Tabs}>
                    <ul>
                        <li onClick={()=>seActiveTab(0)}>Dashboard</li>
                        <li onClick={()=>seActiveTab(1)}>Manage Students</li>
                        <li onClick={()=>seActiveTab(2)}>Manage Teachers</li>
                        <li onClick={()=>seActiveTab(3)}>Settings</li>
                    </ul>
                </div>
            </div>
            <div className={style.MainContent}>
                {activeTab==0 && <Home/>}
                {activeTab==1 && <ManageStudent/>}
                {activeTab==2 && <ManageTeacher/>}
                {activeTab==3 && <Settings/>}
            </div>

        </div>

    </div>
    </div>
  )
}

export default Dashboard
