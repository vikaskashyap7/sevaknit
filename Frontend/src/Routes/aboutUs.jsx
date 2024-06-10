import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUs from "../Components/assets/aboutUs.jpg";
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={aboutUs}
            alt="aboutUs- KNITSULTANPUR Block View"
          />
        </div>
        <p className={styles.content}>
          <br />
          KNIT was initially established as the Faculty of Technology in the year 1976 by Kamla Nehru Memorial Trust. It was taken over by the Government. of Uttar Pradesh in 1979 with a view to developing a full-fledged Engineering Institute in the Eastern UP region better known as the Awadh region. Later, in the year 1983 it was registered as a separate society and renamed as the Kamla Nehru Institute of Technology.
          <br />
          <br />
          The Institute is one of the leading technical Institutions of the region and is responsible for producing top-grade engineers with skill sets comparable with the best in the world. Being fully aware of its social responsibilities and the addressing the issue of application of technology to industry, it also renders the testing and consultancy services to the neighboring industries and various other agencies. The Institute is presently Autonomous College Of Dr. A.P.J. Abdul Kalam Technical University, Formerly known as Uttar Pradesh Technical University, Lucknow.
          <br />
          <br />
          <h2>Vision</h2>
          <hr></hr>
          <p>To be among the finest institutions providing technical education empowered with research, innovation and entrepreneurship.</p>
          <br />
           <h2>Mission</h2>
           <hr></hr>
           <p>Striving for the excellence in teaching-learning process, nurturing personality development; encouraging research, innovation, entrepreneurship and training to students to upload the highest ethical standards in all the activities.</p>
          <br />
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
