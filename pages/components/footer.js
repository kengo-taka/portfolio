import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from '/styles/Home.module.css';

const Footer = () => {
  return ( 
    <div className={styles.footerBox}>
<div className={styles.mt5}></div>

<a href="https://www.linkedin.com/in/kengo-takamiya-850141204/">
  <div className={styles.footerSocial}>
    <LinkedInIcon className={styles.footerIcon} />
    <p>LinkedIn</p>
  </div>
</a>

<a href="https://github.com">
  <div className={styles.footerSocial}>
    <GitHubIcon className={styles.footerIcon} />
    <p>GitHub</p>
  </div>
</a>

<div className={styles.mt10}>
  <small className={styles.copyRight}>
    © 2021 Kengo.T
    </small>
</div>
    </div>
   );
}
 
export default Footer;