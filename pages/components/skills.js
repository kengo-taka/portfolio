import styles from '/styles/Home.module.css';
import AppleIcon from '@material-ui/icons/Apple';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Aos from "aos";
import "aos/dist/aos.css"

const Skills = () => {

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
    <div id="skills">
      {/* Skills */}
      <div className={styles.mt10} id="skills">
        <div align="center">
          <div className={styles.longLine} ></div>
        </div>
        <div className={styles.mt5}></div>
        <motion.h2 className={styles.skillsTitle}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}>Skills</motion.h2>
        <div className={styles.mt3}></div>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={0}>
              <div align="center">
                <Card elevation={0} className={styles.cardSkills} >
                  <AppleIcon style={{ fontSize: 80 }} />
                  <h3 className={styles.skillsTitle}>iOS Development</h3>
                      <div className={styles.orangeLineS1}></div>
                  <div className={styles.mt2}></div>
                  <p className={styles.skillsText} data-aos="flip-left">Swift</p>
                  <p className={styles.skillsText} data-aos="flip-left">Objective-C</p>
                </Card>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={0}>
              <div align="center">
                <Card elevation={0} className={styles.cardSkills} >

                  <DesktopMacIcon style={{ fontSize: 80 }}/>

                  <h3 className={styles.skillsTitle} >Web Development</h3>
                      <div className={styles.orangeLineS1}></div>
                  <div className={styles.mt2}></div>
                  <p className={styles.skillsText} data-aos="flip-left">React.js / Next.js / Material UI</p>
                  <p className={styles.skillsText} data-aos="flip-left">Redux</p>
                  <p className={styles.skillsText} data-aos="flip-left">Firebase / MongoDB / MySQL</p>
                  <p className={styles.skillsText} data-aos="flip-left">Java</p>
                  <p className={styles.skillsText} data-aos="flip-left">JavaScript(Express)</p>
                  <p className={styles.skillsText} data-aos="flip-left">HTML / CSS / BootStrap</p>
                  <p className={styles.skillsText} data-aos="flip-left">WordPress(with PHP)</p>
                </Card>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Skills;