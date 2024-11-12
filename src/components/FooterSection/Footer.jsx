import React from 'react';
import { useLocation } from 'react-router-dom'; 
import style from "../FooterSection/Footer.module.css";
import logo from "../../assets/footersection/logo.svg";
import location from "../../assets/footersection/location.svg";
import phone from "../../assets/footersection/phone.svg";
import mail from "../../assets/footersection/mail.svg";
import linkedin from "../../assets/footersection/linkedin.svg";
import instagram from "../../assets/footersection/instagram.svg";
import min from "../../assets/supportedbysection/min_st.svg";
import nidhiprayas from "../../assets/supportedbysection/nidhiprayas.webp";
import startupindia from "../../assets/supportedbysection/startupindia.webp";
import meity from "../../assets/supportedbysection/MeitY.png";

const Footer = () => {
  const location = useLocation();

  return (
    <>
      <div className={style.footer}>
        {location.pathname === '/' && (
          <div className={style.Grantsby}>
            <div>Grants given by</div>
            <div className={style.grantsorg}>
              <div className="Org">
                <img src={min} alt="" />
              </div>
              <div className="Org">
                <img src={nidhiprayas} alt="" />
              </div>
              <div className="Span">
                <img src={startupindia} alt="" />
              </div>
              <div className="Span">
                <img src={meity} alt="" />
              </div>
            </div>
          </div>
        )}

        <div className={style.content}>
          <div className={style.left}>
            <div className={style.company}>
              <img src={logo} alt="" />
              <div className={style.name}>K.A.T</div>
            </div>
            <div className={style.contact}>
              <div className={style.address}>
                <img src={location} alt="" />
                <div className={style.location_1}>
                  <span>30, Green Avenue, Khatipura Road, Jharkhand Mod, Jaipur, 302012, Rajasthan.</span>
                </div>
              </div>
              <div className={style.phone}>
                <img src={phone} alt="" />
                <span>+91 89529 43460</span>
              </div>
              <div className={style.mail}>
                <img src={mail} alt="" />
                <span>khageshvaramobility@gmail.com</span>
              </div>
            </div>
          </div>

          <div className={style.right}>
            <div className={style.links}>
              <div className={style.link1}>
                <a href="/about">About Us</a>
              </div>
              <div className={style.link2}>
                <a href="/technology">Technology</a>
              </div>
              <div className={style.link3}>
                <a href="/career">Careers</a>
              </div>
            </div>
            <div className={style.social_handles}>
              <a href="https://www.linkedin.com/company/khageshvara-aviation-technology-pvt-ltd-k-a-t/">
                <img src={linkedin} alt="" />
              </a>
              <a href="https://www.instagram.com/khageshvara/">
                <img src={instagram} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className={style.copyright}>
          <div className={style.text}>
            © 2024 Khageshvara Aviation Technology private limited, all rights reserved
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
