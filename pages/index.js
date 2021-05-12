import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AppleIcon from '@material-ui/icons/Apple';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import { makeStyles } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { motion } from 'framer-motion'
import Link from '@material-ui/core/Link'

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     // I have to change the value later
  //     main : '#000'
  //   }
  // }
})
const useStyle = makeStyles({
  card1: {
    maxWidth: "80%",
    width: "480px",
    height: "390px",
    paddingTop: "60px",
    marginBottom: "50px"
  },
  hover: {
    position: "relative",
    overflow: "hidden",
    maxWidth: "80%",
  },
  hoverImg: {
    width: "100%",
    height: "100%",
    filter: "grayscale(50%)",
    margin: "0",
    padding: "0"
  },
  hoverText: {
    paddingTop: "20px",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.65)",
    opacity: "0",
    transition: ".3s ease-in-out",
    '&:hover': {
      opacity: "1"
    }
  },
  card2: {
    maxWidth: "80%",
    width: "300px",
    height: "310px",
    paddingTop: "30px",
    marginBottom: "50px"
  },
  middle: {
    textAlign: "center"
  },
  spacing: {
    marginTop: "10px"
  },
  marginBottom: {
    marginBottom: "30px"
  },
  marginT1: {
    marginTop: "10px"
  },
  marginT2: {
    marginTop: "20px"
  },
  marginT3: {
    marginTop: "30px"
  },
  marginT4: {
    marginTop: "40px"
  },
  marginT5: {
    marginTop: "50px"
  },
  marginT10: {
    marginTop: "100px",
  },
  marginB1: {
    marginBottom: "10px"
  },
  marginB2: {
    marginBottom: "20px"
  },
  marginB3: {
    marginBottom: "30px"
  },
  marginB4: {
    marginBottom: "40px"
  },
  marginB5: {
    marginBottom: "50px"
  },
  navbarRight: {
    display: "flex",
    marginRight: "10px",
    marginLeft: "auto",
    marginTop: "30px",
    justifyContent: "flex-end",
    [theme.breakpoints.down('md')]: {
      display: "none"
    }
  },
  navItem: {
    marginLeft: "50px",
    fontFamily: "PT Serif"
  },
  navbar: {
    display: "flex",
    position: "sticky",
    top: "0"
  },
  navbarRightSmall: {
    marginTop: "20px",
    marginRight: "10px",
    marginLeft: "auto",
    [theme.breakpoints.up('lg')]: {
      display: "none"
    }
  },
  fontChange: {
    fontFamily: "PT Serif"
  },
  fontKT: {
    fontFamily: "Dancing Script"
  },
  line: {
    width: "50px",
    height: "2px",
    backgroundColor: "black",
    marginTop: "10px"
  }
})

export default function Home() {
  const classes = useStyle()

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorE2, setAnchorE2] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  
  const handleClose2 = () => {
    setAnchorE2(null);
  };
  return (
    <Container>
      <Head>
        <title>Kengo Portfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Dancing+Script:wght@700&family=Lobster&family=PT+Serif&family=Russo+One&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>

        {/* Nav bar */}
        <div className={classes.navbar} id="home">
          <motion.div
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ duration: 2.0 }}
          ><Typography variant="h2" className={classes.fontKT}>K.T</Typography>
          </motion.div>

          <div className={classes.navbarRight}>
            <Typography variant="h6" className={classes.navItem}><a href="#home">Home</a></Typography>
            <Typography variant="h6" className={classes.navItem}><a href="#about">About</a></Typography>
            <Typography variant="h6" className={classes.navItem}><a href="#products">Products</a></Typography>
            <Typography variant="h6" className={classes.navItem}><a href="#skills">Skills</a></Typography>
            <Typography variant="h6" className={classes.navItem}><a href="#contact">Contact</a></Typography>
          </div>
          <div className={classes.navbarRightSmall}>
            <MenuIcon style={{ fontSize: 40 }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><a href="#home">Home</a></MenuItem>
              <MenuItem onClick={handleClose}><a href="#about">About</a></MenuItem>
              <MenuItem onClick={handleClose}><a href="#products">Products</a></MenuItem>
              <MenuItem onClick={handleClose}><a href="#skills">Skills</a></MenuItem>
              <MenuItem onClick={handleClose}><a href="#contact">Contact</a></MenuItem>
            </Menu>
          </div>
        </div>

        <div align="center" className={classes.marginT3}>
          <Image src="/rain.jpg" width={800} height={400} alt="hi" />
        </div>

        {/* About */}
        <div className={classes.marginT10} id="about">
          <div align="center">
            <Typography variant="h4" className={classes.fontChange}>About</Typography>
            <div className={classes.line}></div>
          </div>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <Paper elevation={0} >
                <div align="center">
                  <Card elevation={0} className={classes.card1}>
                    <Image src="/mac.jpg" width={450} height={300} alt="hi" />
                  </Card>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper elevation={0}>
                <div align="center">
                  <Card elevation={0} className={classes.card1}>
                    <div className={classes.marginT5}></div>
                    <Typography variant="h6" className={classes.fontChange}>I am Kengo.
<br></br>I am iOS developer and front-end developer.</Typography>
                  </Card>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        {/* products */}
        <div id="products">
          <div align="center">
            <Typography variant="h4" className={classes.fontChange}>Products</Typography>
            <div className={classes.line}></div>
          </div>


          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Paper elevation={0} >
                <div align="center">
                  <Link href="http://ayaship.marine-ocean.com/"><Card elevation={0} className={classes.card1}>
                    <div className={classes.hover}>
                      <div className={classes.hoverImg}>
                        <Image src="/ayaship.png" width={450} height={300} alt="hi" />
                      </div>
                      <div className={classes.hoverText}>
                        <Typography variant="h4">Patient Website</Typography>
                        <Typography variant="body2" className={classes.fontChange}>It is made by Wordpress, PHP, BootStrap.<br></br>
                        It is a website for patients with intractable diseases.</Typography>
                      </div>
                    </div>
                  </Card>
                  </Link>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Paper elevation={0}>
                <div align="center">
                <Link href="http://ayaship.marine-ocean.com/">
                  <Card elevation={0} className={classes.card1}>
                    <div className={classes.hover}>
                      <div className={classes.hoverImg}>
                        <Image src="/apple.png" width={450} height={300} alt="hi" />
                      </div>
                      <div className={classes.hoverText}>
                        <Typography variant="h4">Apple Website</Typography>
                        <Typography variant="body2" className={classes.marginT3}>It is made by BootStrap.</Typography>
                      </div>
                    </div>
                  </Card>
                  </Link>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Paper elevation={0}>
                <div align="center">
                <Link href="http://company.marine-ocean.com/">
                  <Card elevation={0} className={classes.card1}>
                    <div className={classes.hover}>
                      <div className={classes.hoverImg}>
                        <Image src="/company.png" width={450} height={300} alt="h" />
                      </div>
                      <div className={classes.hoverText}>
                        <Typography variant="h4">Company Website</Typography>
                        <Typography variant="body2" className={classes.marginT3}>It is made by BootStrap.</Typography>
                      </div>
                    </div>
                  </Card>
                  </Link>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div align="center" className={classes.marginT3}>
          <Image src="/ground.jpg" width={800} height={400} alt="hi" />
        </div>
        {/* Skills */}
        <div className={classes.marginT10} id="skills">
          <div align="center">
            <Typography variant="h4" className={classes.fontChange}>Skills</Typography>
            <div className={classes.line}></div>
          </div>
          <div className={classes.marginT10}></div>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <Paper elevation={0}
              >
                <div align="center">
                  <motion.div whileHover={{ scale: 1.3 }}>
                    <Card elevation={10} className={classes.card2} >
                      <Typography align="center">
                        <AppleIcon style={{ fontSize: 80 }} />
                      </Typography>
                      <Typography variant="h5" align="center" className={classes.fontChange}>iOS Development</Typography>
                      <div className={classes.marginB2}></div>
                      <Typography variant="body2" align="center" className={classes.fontChange}>Swift</Typography>
                      <Typography variant="body2" align="center" className={classes.fontChange}>Objective-C</Typography>
                    </Card>
                  </motion.div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper elevation={0}>
                <div align="center">
                  <motion.div whileHover={{ scale: 1.3 }}>
                    <Card elevation={10} className={classes.card2}>
                      <Typography align="center">
                        <DesktopMacIcon style={{ fontSize: 80 }} />
                      </Typography>
                      <Typography variant="h5" align="center" className={classes.fontChange}>Web Development</Typography>
                      <Typography variant="body2" align="center" className={classes.fontChange}>React.js / Next.js / Material UI</Typography>
                      <Typography variant="body2" align="center" className={classes.fontChange}>Java</Typography>
                      <Typography variant="body2" align="center" className={classes.fontChange}>JavaScript</Typography>
                      <Typography variant="body2" align="center" className={classes.fontChange}>HTML / CSS</Typography>
                      <Typography variant="body2" align="center" className={classes.fontChange}>BootStrap</Typography>
                      <Typography variant="body2" align="center" className={classes.fontChange}>PHP</Typography>
                      <Typography variant="body2" align="center" className={classes.fontChange}>WordPress</Typography>
                    </Card>
                  </motion.div>
                </div>

              </Paper>
            </Grid>
          </Grid>
        </div>

        {/* contact */}
        <div className={classes.marginT10} id="contact">
          <div align="center">
            <Typography variant="h4" className={classes.fontChange}>Contact</Typography>
            <div className={classes.line}></div>
          </div>

          <div align="center" className={classes.marginT5}>
            <Button type="submit" variant="outlined" color="black" aria-controls="simple-menu2" aria-haspopup="true" onClick={handleClick2} >GET IN TOUCH</Button>
            
            <Menu
              id="simple-menu2"
              anchorEl={anchorE2}
              keepMounted
              open={Boolean(anchorE2)}
              onClose={handleClose2}
            >
              <MenuItem onClick={handleClose2}> <Typography variant="body2" className={classes.fontChange}>
            P: +1 236 330 0296</Typography></MenuItem>
            <MenuItem onClick={handleClose2}> <Typography variant="body2" className={classes.fontChange}>
            E: 1117marine1117@gmail.com</Typography></MenuItem>
            <MenuItem onClick={handleClose2}> <Typography variant="body2" className={classes.fontChange}>
            A: Vancouver Canada</Typography></MenuItem>
            </Menu>
          </div>
        </div>
          
      

        {/* footer */}
        <div className={classes.marginT10}>
          <div className={classes.marginT10}></div>
          <Typography variant="body2" align="center" className={classes.fontChange}>
            Kengo.T
</Typography>

        </div>



      </ThemeProvider>
    </Container>
  )
}
