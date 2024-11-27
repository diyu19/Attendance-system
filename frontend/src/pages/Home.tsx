import React from 'react'
import style from "./index.module.css"
const Home = () => {
  return (
    <div className={style.abcs}>
        <div className={style.container}>
            <div className={style.assessment}>
                <h1> Start Your AssessMent with Great Institute!</h1>
                <p>The background is fixed relative to the viewport. Even if an element has a scrolling mechanism, the background doesn't move with the element.</p>
            <button className={style.startbtn}>Start Now</button>
            </div>
        </div>
        <div className={style.content}>
            hello
        </div>
        <div className={style.content}>
            hello
        </div>
      hello from this
    </div>
  )
}

export default Home
