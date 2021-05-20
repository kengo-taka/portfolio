import styles from '/styles/Home.module.css';
import AppleIcon from '@material-ui/icons/Apple';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

const Skills = () => {
  return (
    <div id="skills">
      {/* Skills */}
      <div className={styles.mt10} id="skills">
        <div align="center">
          <div className={styles.longLine} ></div>
        </div>
        <div className={styles.mt5}></div>
        <h2 className={styles.skillsTitle}>Skills</h2>
        <div className={styles.mt3}></div>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={0}>
              <div align="center">
                <Card elevation={0} className={styles.cardSkills} >
                    <AppleIcon style={{ fontSize: 80 }} />
                  <h3 className={styles.skillsTitle}>iOS Development</h3>
                  <div className={styles.mt2}></div>
                  <p className={styles.skillsText}>Swift</p>
                  <p className={styles.skillsText}>Objective-C</p>
                </Card>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Paper elevation={0}>
            <div align="center">
                <Card elevation={0} className={styles.cardSkills} >
                  
                    <DesktopMacIcon style={{ fontSize: 80 }} />

                  <h3 className={styles.skillsTitle}>Web Development</h3>
                  <div className={styles.mt2}></div>
                  <p className={styles.skillsText}>React.js / Next.js / Material UI</p>
                  <p className={styles.skillsText}>Java</p>
                  <p className={styles.skillsText}>JavaScript</p>
                  <p className={styles.skillsText}>HTML / CSS</p>
                  <p className={styles.skillsText}>BootStrap</p>
                  <p className={styles.skillsText}>PHP</p>
                  <p className={styles.skillsText}>WordPress</p>
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