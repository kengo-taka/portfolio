import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { MenuItem, Menu } from '@mui/material';
import React from 'react';



const Header = () => {

  // for button menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="header">
        <div>
          <p className="kengoLogo">KENGO</p>
          <div className="headerLine"></div>
        </div>
        <div className="menuForBigS">
          <IconButton className="menuIcon"
            // style={{ fontSize: 30, color: "white" }} 
            aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
          // onClick={()=>{console.log("hola")}}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><a className="menuItem" href="#education">Education</a></MenuItem>
            <MenuItem onClick={handleClose}><a className="menuItem" href="#product">Product</a></MenuItem>
            <MenuItem onClick={handleClose}><a className="menuItem" href="#skill">Skill</a></MenuItem>
            <MenuItem onClick={handleClose}><a className="menuItem" href="#contact">Contact</a></MenuItem>
          </Menu>
        </div>
      </div>

      <div className="headerMenu">
        <div><a href="#education"><p>EDUCATION</p></a></div>
        <div><a href="#product"><p>PRODUCT</p></a></div>
        <div><a href="#skill"><p>SKILL</p></a></div>
        <div><a href="#contact"><p>CONTACT</p></a></div>
      </div>
    </div>
  );
}

export default Header;