import React from "react";

import styles from "./Heroine.module.css";

export const Heroine = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kaivalya</h1>
        <p className={styles.description}>
        I am a versatile professional proficient in ReactJS development, coding, machine learning, and data analysis. My skill set encompasses creating dynamic web applications, implementing coding solutions, and leveraging data insights to drive informed decision-making. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:kaivalyakammella@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="assests\heroine\heroineimage.jpg"
        alt="Heroine image of me"
        className={styles.heroineImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};