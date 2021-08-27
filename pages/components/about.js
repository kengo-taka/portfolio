import Image from 'next/image';
import styles from '/styles/Home.module.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      {/* About */}
      <div className={styles.mt10} id="about">
        <div align="center">
        </div>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={0} >
              <div align="center">
                <Card elevation={0} className={styles.cardAbout}>
                  <Image src="/cafe.jpg" width={450} height={300} alt="hi"/>
                </Card>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={0}>
              <div align="center">
                <Card elevation={0} className={styles.cardAbout}>
                  <div className={styles.mt2}></div>
                  <h4 className={styles.aboutText}>I am Kengo. I am an iOS developer and a front-end developer, based in  Vancouver, available to work remotely or onsite. I will build your iPhone App and Web site.</h4>
                </Card>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>


    </div>
  );
}

export default About;