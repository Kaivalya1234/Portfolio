import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="assests\contact\emailIcon.png" alt="Email icon" />
          <a href="mailto:kaivalyakammella@gmail.com">kaivalyakammella@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="assests\contact\linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/kammella-kaivalya-90401822b/">linkedin.com/kaivalyakammella</a>
        </li>
        <li className={styles.link}>
          <img src="assests\contact\githubIcon.png" alt="Github icon" />
          <a href="https://github.com/Kaivalya1234">github.com/kaivalyakammella</a>
        </li>
      </ul>
    </footer>
  );
};