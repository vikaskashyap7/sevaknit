import React from "react";
import ChildImage from "./assets/whyUsSection-happyKids.jpg";
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
  return (
    <React.Fragment>
      <div className="row col-12">
        <div className={`col-md-8 ${styles.whyUs}`}>
          <h1 className={styles.header}>Why us ?</h1>
          <p className={styles.para}>
            We the students of KNIT, Sultanpur are not just the collegemates but a family instead. We are a family of more than 500 members. At some times, some member of the family may be in need of the support from rest of the members. As it is well known that people look at their closed ones in hard times. So, our motto is to help our colleagues in such times. We, as a famiy of more than 500 members can easily attain tough financial goals together through small contributions from all of us. With the objective that no one feel alone and stressed over the financial limitations in their tough times, we the 'SEWA' team have taken this initiative. So, be a such member who not only laughs together but also stands side by side in the tough times of their loved ones. Go ahead and kindly donate for the sake of all the love and laughter that we share among us 😊.
          </p>
        </div>
        <div className="col-md-4">
          <img className={styles.image} src={ChildImage} alt="HappyKids" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyUs;
