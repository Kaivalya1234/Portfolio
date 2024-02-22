import React from "react";
import styles from "./About.module.css";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="assests\about\my-image.jpg"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="assests\about\ui-design.jpg" alt="design icon" />
            <div className={styles.aboutItemText}>
              <h3>Reactjs Developer</h3>
              <p>
                I'm a Reactjs developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="assests\about\analysis.jpg" alt="analysis icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
               I reviewed data to identify key insights into a business's customers and ways the data can be used to solve problems. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="assests\about\coding.jpg" alt="code icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Engineer</h3>
              <p>
                I have experienced in Machine learning algorithms that help machines learn and improve from data analysis without explicit programming.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};