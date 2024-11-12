import React from 'react'
import style from "../JoinSection/Join.module.css"


const Join = () => {
    const openGoogleForm = () => {
        window.open("https://forms.gle/A4yU2ZcsDth2knFE9", "_blank");
      };
  return (
    <>
    <div className={style.contentwrapper}>
        <div className={style.Head}>
            <div className={style.head1}>
                LET'S <span>TOGETHER</span> "REACH THE
            </div>
            <div className={style.head2}>UNREACHBALE"</div>
        </div>
        <div className={style.joinbutton}>
            <button onClick={openGoogleForm} className={style.button}>
                JOIN OUR REVOULTION
            </button>
        </div>
    </div>
    </>
  )
}

export default Join
