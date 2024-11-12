import React from 'react'
import style from "../SupportedBySection/Support.module.css"
import bits from "../../assets/supportedbysection/BITS.svg"
import PIEDS from "../../assets/supportedbysection/PIEDS.svg"
import Yspace from "../../assets/supportedbysection/Yspace.png"
import Oxford from "../../assets/supportedbysection/oxford.webp"
import ISB from "../../assets/supportedbysection/ISB.webp"
import DLABS from "../../assets/supportedbysection/dlabs.png"
import TEC from "../../assets/supportedbysection/BITS-TEC_Logo.png"
import SRIX from "../../assets/supportedbysection/SRIX.jpg"

const Support = () => {
  return (
    <>
    <div className={style.contentwrapper}>
        <div className={style.supportedby}>
            <div>Supported by</div>
            <div className={style.supportorg}>
                <div className="org">
                    <img src={bits} alt="" />
                </div>
                <div className="org">
                    <img src={PIEDS} alt="" />
                </div>
                <div className="org">
                    <img src={Yspace} alt="" />
                </div>
                <div className="org">
                    <img src={Oxford} alt="" />
                </div>
                <div className="org">
                    <img src={ISB} alt="" />
                </div>
                <div className="org">
                    <img src={DLABS} alt="" />
                </div>
                <div className="org">
                    <img src={TEC} alt="" />
                </div>
                <div className="org">
                    <img src={SRIX} alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Support
