import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import styles from '/styles/Home.module.css';
import emailjs from 'emailjs-com';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_uvtyvca', 'template_oy1d78v', e.target, 'user_QxAtFMz1Wca0Rq6Y0I3BL')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div id="contact" className={styles.mt5}>
      <div className={styles.longLine} ></div>
      <h3 className={styles.contactTitle} >Contact</h3>
      <div className={styles.mt5}></div>
      <p className={styles.contactText}>Don’t hesitate to contact me if you have any questions or interesting projects for me.</p>
      <div className={styles.mt5}></div>

      <form noValidate autoComplete="off" className={styles.contactField} onSubmit={sendEmail}>
        <TextField
          label="Name"
          variant="outlined"
          required
          fullWidth
          type="text"
          name="from_name"
        ></TextField>
        <div className={styles.mt3}></div>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          required
          type="text"
          name="from_email"
        ></TextField>
        <div className={styles.mt3}></div>
        <TextField

          fullWidth
          label="Text"
          variant="outlined"
          required
          multiline
          rows={4}
          type="email"
          name="message"
        ></TextField>
        <div className={styles.mt3}></div>
        <div align="center">
          <Button
            variant="outlined" color="black"
            type="submit" value="Send">Send a message</Button>
        </div>
      </form>

      <div className={styles.mt5}></div>

      <a href="https://www.linkedin.com/in/kengo-takamiya-850141204/">
        <div className={styles.contactSocial}>
          <LinkedInIcon className={styles.socialIcon} />
          <p>LinkedIn</p>
        </div>
      </a>

      <a href="https://github.com">
        <div className={styles.contactSocial}>
          <GitHubIcon className={styles.socialIcon} />
          <p>GitHub</p>
        </div>
      </a>

      <div className={styles.mt10}>
        <small className={styles.copyRight}>
          Kengo.T
          </small>
      </div>

    </div>
  );
}

export default Contact;