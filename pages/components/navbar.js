import styles from '/styles/Home.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { motion } from 'framer-motion'

const Navbar = () => {

  // for button menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.navbar}>
      <motion.div
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ duration: 2.0 }}
      >
        <a href="#about"><h1 className={styles.fontKT}>K.T</h1></a>
      </motion.div>

      {/* navbar for big screen */}
      <div className={styles.navbarRight}>
        <a href="#about" className={styles.navItem}><h3>
          ABOUT</h3></a>
        <a href="#education" className={styles.navItem}><h3>
          EDUCATION</h3></a>
        <a href="#products" className={styles.navItem}><h3>
          PRODUCTS</h3></a>
        <a href="#skills" className={styles.navItem}><h3>
          SKILLS</h3></a>
        <a href="#contact" className={styles.navItem}><h3>
          CONTACT</h3></a>
      </div>

      {/* navbar for small screen */}
      <div className={styles.navbarRightSmall}>
        <MenuIcon style={{ fontSize: 30, color: "white" }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}><a href="#about">About</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="#education">Education</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="#products">Products</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="#skills">Skills</a></MenuItem>
          <MenuItem onClick={handleClose}><a href="#contact">Contact</a></MenuItem>
        </Menu>
      </div>
    </div>

  );
}

export default Navbar;