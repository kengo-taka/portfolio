import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from '/styles/Home.module.css';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import Aos from "aos";
import "aos/dist/aos.css"


const Contact = () => {

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

  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [message, setMessage] = useState('')
  const [messageError, setMessageError] = useState(false)

  function sendEmail(e) {
    e.preventDefault();
    setNameError(false)
    setEmailError(false)
    setMessageError(false)

    if (name == '') {
      setNameError(true)
    }
    if (email == '') {
      setEmailError(true)
    }
    if (message == '') {
      setMessageError(true)
    }

    if (name != '' && email != '' && message != '') {
      emailjs.sendForm('service_uvtyvca', 'template_oy1d78v', e.target, 'user_QxAtFMz1Wca0Rq6Y0I3BL')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      e.target.reset()
    }
  }

  return (
    <div id="contact" className={styles.mt5}>
      <div className={styles.longLine} ></div>
      <motion.h2 className={styles.contactTitle}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={boxVariants}>Contact</motion.h2>
      <div className={styles.mt5}></div>
      <div className={styles.contactImage}>
        <Image src="/cafe2.jpg" width={380} height={250} alt="hi" data-aos="flip-up"/>
      </div>
      <div className={styles.mt5}></div>
      <p className={styles.contactText}>Don’t hesitate to contact me if you have any questions or interesting projects for me.</p>
      <div className={styles.mt5}></div>

      <form noValidate autoComplete="off" className={styles.contactField} onSubmit={sendEmail}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          label="Name"
          variant="outlined"
          required
          fullWidth
          type="text"
          name="from_name"
          error={nameError}
        ></TextField>
        <div className={styles.mt3}></div>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          label="Email"
          variant="outlined"
          required
          type="text"
          name="from_email"
          error={emailError}
        ></TextField>
        <div className={styles.mt3}></div>
        <TextField
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          label="Text"
          variant="outlined"
          required
          multiline
          rows={4}
          type="email"
          name="message"
          error={messageError}
        ></TextField>
        <div className={styles.mt3}></div>
        <div align="center">
          <Button
            variant="outlined" color="black"
            type="submit" value="Send" data-aos="flip-down">Send a message</Button>
        </div>
      </form>
    </div>
  );
}

export default Contact;