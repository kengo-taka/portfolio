import styles from '/styles/Home.module.css';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Aos from "aos";
import "aos/dist/aos.css"

const Education = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // title animation
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div id="education">
      <div align="center">
        <div className={styles.longLine} ></div>
      </div>
      <div className={styles.mt5}></div>
      <motion.h2 className={styles.educationTitle}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={boxVariants}>Education</motion.h2>
      <div className={styles.mt5}></div>
      <div data-aos="zoom-in-right">
        <h3 className={styles.educationText1}>DIPLOMA OF COMPUTER </h3>
        <div className={styles.orangeLineE1}></div>
        <h4 className={styles.educationText2}>Cornerstone International Community College of Canada | July 2020 -</h4>
        <h4 className={styles.educationText3}>Coursework: Introduction to Computing, Algorithms, Flow Charts andProblem Solving, Java (Introduction to Object
          Oriented Programming),
          Swift Programming (Algorithms & Data Structures), Objective-C, HTML,CSS, BootStrap, Wordpress</h4>
        <div className={styles.mt10}></div>
      </div>

      <div data-aos="zoom-in-right">
        <h3 className={styles.educationText1}>BACHELOR OF MARINE BIOLOGY</h3>
        <div className={styles.orangeLineE2}></div>

        <h4 className={styles.educationText2}>Mie University | 2012 - 2016</h4>
        <h4 className={styles.educationText3}>Development of cosmetics from pearl oyster proteins</h4>
      </div>
      <div className={styles.mt10}></div>
    </div>
  );
}

export default Education;