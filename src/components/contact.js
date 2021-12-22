import emailjs from 'emailjs-com';
import { TextField, Button } from '@mui/material';
import { useState, useEffect } from 'react';


const Contact = () => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [message, setMessage] = useState('')
  const [messageError, setMessageError] = useState(false)
  const [showError, setShowError] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault();
    setNameError(false)
    setEmailError(false)
    setMessageError(false)

    if (name == '') {
      setNameError(true)
      setShowError("Error...")
    }
    if (email == '') {
      setEmailError(true)
      setShowError("Error...")
    }
    if (message == '') {
      setMessageError(true)
      setShowError("Error...")

    }

    if (name != '' && email != '' && message != '') {
      emailjs.sendForm('service_uvtyvca', 'template_oy1d78v', e.target, 'user_QxAtFMz1Wca0Rq6Y0I3BL')
        .then((result) => {
          console.log(result.text);
          setShowError("")
          setName("")
          setEmail("")
          setMessage("")
        }, (error) => {
          console.log(error.text);
        });
      e.target.reset()
    }
  }


  return (
    <div id="contact">
      <div className="contact">
        <div className="sp5"></div>
        <p className="contactTitle">CONTACT</p>
        <div className="contactLine"></div>
        <div className="sp5"></div>

        <p className="contactText">Don’t hesitate to contact me if you have any questions or interesting projects for me.</p>

        <div className="sp5"></div>

        <div className="contactBox">
          <form noValidate autoComplete="off" className="" onSubmit={sendEmail}>
            {showError && <p className="errorM">{showError}</p>}
            <p className="inputLabel">Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              className="contactInput"
            ></input>
            <div className="sp3"></div>
            <p className="inputLabel">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              className="contactInput"
              type="email"
            ></input>
            <div className="sp3"></div>
            <p className="inputLabel">Text</p>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              required
              className="contactInput2"
              type="text"
            ></textarea>
            <div className="sp3"></div>

            <div className="sendButtonPosition">
            <input className="sendMessageInContact" type="submit"
              value="Send Message"
            ></input>
            </div>
          </form>
        </div>

      </div>
      <div className="sp5"></div>
    </div >
  );
}

export default Contact;