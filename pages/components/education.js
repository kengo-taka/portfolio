import styles from '/styles/Home.module.css';
import React from 'react';

const Education = () => {
  return (
    <div id="education">
      <div align="center">
        <div className={styles.longLine} ></div>
      </div>
      <div className={styles.mt5}></div>
      <h2 className={styles.educationTitle}>Education</h2>
      <div className={styles.mt5}></div>
      <h3 className={styles.educationText1}>DIPLOMA OF COMPUTER </h3>
      <h4 className={styles.educationText2}>Cornerstone International Community College of Canada | July 2020 -</h4>
      <h4 className={styles.educationText3}>Coursework: Introduction to Computing, Algorithms, Flow Charts andProblem Solving, Java (Introduction to Object
      Oriented Programming),
Swift Programming (Algorithms & Data Structures), Objective-C, HTML,CSS, BootStrap, Wordpress</h4>
      <div className={styles.mt10}></div>

      <h3 className={styles.educationText1}>BACHELOR OF MARINE BIOLOGY</h3>
      <h4 className={styles.educationText2}>Mie University | 2012 - 2016</h4>
      <h4 className={styles.educationText3}>Development of c
osmetics from pearl oyster proteins</h4>
      <div className={styles.mt10}></div>
    </div>
  );
}

export default Education;