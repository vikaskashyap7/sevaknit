import React from "react";
// import { Link } from "react-router-dom";
//import logo from "./assets/RotaractIcon.png";
import logo from "./assets/nitkkr.png";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={`mb-0 p-4 ${styles.footer}`}>
      <div className="row">
        <div className={`col-12 col-sm-6 col-md-4 ${styles.left}`}>
          <a href="/">
            <img className={`${styles.logo}`} src={logo} alt="ROTARACT LOGO" />
          </a>
          <br />
          <p className={`${styles.caption}`}>
            Seva Foundation <br /> KNIT SULTANPUR
          </p>
        </div>
        <div className={`col-12 col-sm-6 col-md-4 ${styles.middle}`}>
          <p>
            <b>Follow us on</b>
          </p>
          <a
            className={`${styles.facebook}`}
            href="https://facebook.com/groups/33311002137/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            className={`${styles.linkedin}`}
            href="https://www.linkedin.com/groups/2111574/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <br />
          <div className={`${styles.links}`}>
            <a className={`${styles.link}`} href="/about-us">
              About
            </a>
            <a className={`${styles.link}`} href="/contact-us">
              Contact Us
            </a>
            <a
              className={`${styles.link}`}
              href="https://knit.ac.in/"
              target="_blank"
              rel="noreferrer"
            >
              KNIT Sultanpur
            </a>
          </div>
        </div>
        <div className={`col-12 col-sm-12 col-md-4 ${styles.right}`}>
          <p className={`${styles.names}`}>
            <span style={{ fontWeight: "bolder" }}>Developed By </span>
            <br />
            <a
              className={`${styles.name}`}
              href="https://www.linkedin.com/in/abhishek-kumar-4b1470216/"
              target="_blank"
              rel="noreferrer"
            >
              Abhishek Kumar
            </a>
            {/* <br />
            <a
              className={`${styles.name}`}
              href="https://www.linkedin.com/in/vivekkamboj1/"
              target="_blank"
              rel="noreferrer"
            >
              Vivek Kamboj
            </a> */}
            <br />
            <br /> 
             <span style={{ fontWeight: "bolder" }}>Designed By </span>
            <br />
            <a
              className={`${styles.name}`}
              href="https://www.linkedin.com/in/anup-kumar-gond-b9417622b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              target="_blank"
              rel="noreferrer"
            >
              Anup Kumar Gond
            </a>
          </p>
          <p>
            For any queries, reach out to us at email
            <br />
            <b>seva@knitsln.ac.in</b>
          </p>
        </div>
      </div>

      <div className={`${styles.footerBottom}`}>
        <hr className={`${styles.line}`} />
        <p style={{ textAlign: "center" }}>
          Copyright &copy; 2023 SEVA FOUNDATION KNITSLN. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
