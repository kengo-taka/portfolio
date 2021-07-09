import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Container from '@material-ui/core/Container';
import React from 'react';
import Contact from './components/contact.js'
import Skills from './components/skills.js'
import About from './components/about'
import Education from './components/education.js'
import Products from './components/products.js'
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react'


export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // for button menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div  id="home">
      <Head>
        <title>Kengo Portfolio</title>
      </Head>

      {/* Nav bar */}
      <Navbar/>
      <Container className={styles.con}>

        {/* About */}
        <About />

        {/* education */}
        <Education />

        {/* products */}
        <Products />

        {/* Skills */}
        <Skills />

        {/* contact */}
        <Contact />

      </Container>

        {/* footer */}
        <Footer />
    </div>
  )
}
