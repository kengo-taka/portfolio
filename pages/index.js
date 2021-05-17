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
    width: "400px",
    height: "320px",
    paddingTop: "50px",
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
    width: "350px",
    height: "230px",
    paddingTop: "0px",

    marginBottom: "0px"
  },
  imageChange : {
    width: "100%",
    height: "100%",
    filter: "grayscale(50%)",
  },
  card3: {
    maxWidth: "80%",
    width: "280px",
    height: "270px",
    paddingTop: "0px",
  },
  card4: {
    maxWidth: "80%",
    width: "280px",
    height: "370px",
    paddingTop: "0px",
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
    marginRight: "30px",
    marginLeft: "auto",
    marginTop: "30px",
    justifyContent: "flex-end",
    [theme.breakpoints.down('md')]: {
      display: "none"

    }
  },
  navItem: {
    marginLeft: "50px",
    fontFamily: "Montserrat",
    color: "white"
  },
  navbar: {
    display: "flex",
    position: "sticky",
    top: "0",
    height: "90px",
    backgroundColor: "#2B2B2B"
  },
  navbarRightSmall: {
    marginTop: "28px",
    marginRight: "10px",
    marginLeft: "auto",
    [theme.breakpoints.up('lg')]: {
      display: "none"
    }

  },
  fontChangeForAbout: {
    fontFamily: "PT Serif",
    color: "#757575",
    textAlign: "left"
  },
  fontChange: {
    fontFamily: "PT Serif",
    color: "#757575",
  },
  fontChange2: {
    fontFamily: "PT Serif"
  },
  fontChangeForTitle: {
    fontFamily: "PT Serif"
  },
  fontKT: {
    fontFamily: "Dancing Script",
    color: "white",
    marginTop: "15px",
    marginLeft: "15px"
  },
  line: {
    width: "50px",
    height: "2px",
    backgroundColor: "black",
    marginTop: "10px"
  },
  grayBox: {
    backgroundColor: "#F5F5F5",
    paddingTop: "20px"
  },
  longLine: {
    width: "100%",
    height: "1px",
    backgroundColor: "#DDDDDD"
  },
  newTitle: {
    fontFamily: "Montserrat"
  },
  con: {
    [theme.breakpoints.up('md')]: {
      width: "80%"
    },
    [theme.breakpoints.down('sm')]: {
      width: "90%"
    }
  }
})

export default function Home() {
  const classes = useStyle()

  // for button menu
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
    <div>
      <Head>
        <title>Kengo Portfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Dancing+Script:wght@700&family=Lobster&family=PT+Serif&family=Russo+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"></link>
      </Head>

      {/* Nav bar */}
      <div id="home"></div>
      <div className={classes.navbar} id="home">
        <motion.div
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          transition={{ duration: 2.0 }}
        ><Typography variant="h3" className={classes.fontKT}>K.T</Typography>
        </motion.div>

        <div className={classes.navbarRight}>
          <Typography variant="body1" className={classes.navItem}><a href="#home">HOME</a></Typography>
          <Typography variant="body1" className={classes.navItem}><a href="#about">ABOUT</a></Typography>
          <Typography variant="body1" className={classes.navItem}><a href="#products">PRODUCTS</a></Typography>
          <Typography variant="body1" className={classes.navItem}><a href="#skills">SKILLS</a></Typography>
          <Typography variant="body1" className={classes.navItem}><a href="#contact">CONTACT</a></Typography>
        </div>
        <div className={classes.navbarRightSmall}>
          <MenuIcon style={{ fontSize: 30, color: "white" }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
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

      <Container className={classes.con}>

        {/* About */}
        <div className={classes.marginT5} id="about">
          <div align="center">
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
                    <div className={classes.marginT2}></div>
                    <Typography variant="h6" className={classes.fontChangeForAbout}>I am Kengo. I am an iOS developer and a front-end developer, based in  Vancouver, available to work remotely or onsite. I will build your iPhone App and Web site.</Typography>
                  </Card>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        {/* education */}

        <div align="center">
          <div className={classes.longLine} ></div>
        </div>
        <div className={classes.marginT5}></div>
        <Typography variant="h5" className={classes.newTitle}>Education</Typography>
        <div className={classes.marginT5}></div>
        <Typography variant="body1" className={classes.fontChange2}>DIPLOMA OF COMPUTER SCIENCE</Typography>

        <Typography variant="body1" className={classes.fontChange}>Cornerstone International Community College of Canada | July 2020 -</Typography>
        <div className={classes.marginT2}></div>
        <Typography variant="body2" className={classes.fontChange2}>Coursework: Introduction to Computing, Algorithms, Flow Charts andProblem Solving, Java (Introduction to Object
        Oriented Programming),
Swift Programming (Algorithms & Data Structures), Objective-C, HTML,CSS, BootStrap, Wordpress</Typography>
        <div className={classes.marginT10}></div>

        {/* products */}
        <div id="products">
          <div align="center">
            <div className={classes.longLine} ></div>
          </div>
          <div className={classes.marginT5}></div>
          <Typography variant="h5" className={classes.newTitle}>Products</Typography>
          <Typography className={classes.fontChange} align="left">Here is a selection of projects I have worked on in the recent years.</Typography>
          <Typography className={classes.fontChange} align="left">Click on the thumbnails below for more information.</Typography>
          <div className={classes.marginT5}></div>

          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Paper elevation={0} >
                <div align="center">
                    <Card elevation={5} className={classes.card2}>
                    <Link href="http://ayaship.marine-ocean.com/">  
                      <div className={classes.imageChange}>
                        <Image src="/ayaship.png" width={350} height={240} alt="hi" />
                        </div>
                        </Link>
                    </Card>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Paper elevation={0} >
                <div align="center" >
                  <Card elevation={0} className={classes.card2}>
                  <div className={classes.marginT2}></div>
                  <Typography variant="h5" className={classes.fontChange2}>Medical website</Typography>
                    <div className={classes.marginT3}></div>
                    <Typography className={classes.fontChange} align="left">It is a website for AYA (Adolescent and Young Adult) patients with intractable diseases such as cancer and autoimmune disease in Japan.It is made by Wordpress, PHP and BootStrap.
                  </Typography>
                  </Card>
                </div>
              </Paper>
            </Grid>
          </Grid>

          <div className={classes.marginT5}></div>
          <div className={classes.marginT5}></div>
          <div align="center">
            <div className={classes.longLine} ></div>
          </div>
          <div className={classes.marginT5}></div>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Paper elevation={0}>
                <div align="center">
                    <Card elevation={5} className={classes.card2}>
                    <Link href="http://apple.marine-ocean.com/">
                    <div className={classes.imageChange}>
                        <Image src="/apple.png" width={350} height={240} alt="hi" />
                        </div>
                        </Link>
                    </Card>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Paper elevation={0} >
                <div align="center" >
                  <Card elevation={0} className={classes.card2}>
                  <div className={classes.marginT2}></div>
                  <Typography variant="h5" className={classes.fontChange2}>Apple website</Typography>
                    <div className={classes.marginT3}></div>
                    <Typography className={classes.fontChange} align="left">It is a copy website of Apple Japan. It is made by BootStrap.
                    </Typography>
                  </Card>
                </div>
              </Paper>
            </Grid>
          </Grid>


          <div className={classes.marginT5}></div>
          <div align="center">
            <div className={classes.longLine} ></div>
          </div>
          <div className={classes.marginT5}></div>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Paper elevation={0}>
                <div align="center">
                    <Card elevation={5} className={classes.card2}>
                    <Link href="http://company.marine-ocean.com/">
                    <div className={classes.imageChange}>
                        <Image src="/company.png" width={350} height={240} alt="hi" />
                        </div>
                        </Link>
                    </Card>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Paper elevation={0} >
                <div align="center" >
                  <Card elevation={0} className={classes.card2}>
                  <div className={classes.marginT2}></div>
                  <Typography variant="h5" className={classes.fontChange2}>Company website</Typography>
                    <div className={classes.marginT3}></div>
                    <Typography className={classes.fontChange} align="left">It is a website of imaginary company. It is made by BootStrap.
                    
                    </Typography>
                  </Card>
                </div>
              </Paper>
            </Grid>

          </Grid>
          <div className={classes.marginT5}></div>
          <div align="center">
            <div className={classes.longLine} ></div>
          </div>
          <div className={classes.marginT5}></div>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Paper elevation={0}>
                <div align="center">
                    <Card elevation={0} className={classes.card4}>
                    <Link href="https://github.com/cookie777/Hang-Out-Planner">
                          <Image src="/hang.png" width={200} height={370} alt="h" />
                          </Link>
                    </Card>
                </div> 
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Paper elevation={0} >
                <div align="center" >
                  <Card elevation={0} className={classes.card4}>
                  <div className={classes.marginT3}></div>
<Typography variant="h5" className={classes.fontChange2}>Hang-Out-Planner</Typography>
<div className={classes.marginT3}></div>
                    <Typography className={classes.fontChange} align="left">App for people who are not familiar with the user's currentlocation(e.g. tourists, transients living in the city, etc.)
Shows the directions and route option between each place. It Uses MapKit, WebAPI and Tableview.
                    
                    </Typography>
                  </Card>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <div className={classes.marginT5}></div>
          <div align="center">
            <div className={classes.longLine} ></div>
          </div>
          <div className={classes.marginT5}></div>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Paper elevation={0}>
                <div align="center">
                    <Card elevation={0} className={classes.card4}>
                    <Link href="https://github.com/kengo-taka/ToDoItemWithCoreData">
                          <Image src="/todo.png" width={200} height={370} alt="h" />
                          </Link>
                    </Card>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Paper elevation={0} >
                <div align="center" >
                  <Card elevation={0} className={classes.card4}>
                    <div className={classes.marginT3}></div>
                  <Typography variant="h5" className={classes.fontChange2}>To Do List</Typography>
                  <div className={classes.marginT5}></div>
                    <Typography className={classes.fontChange} align="left">App for people who want to manage their schedule. It uses Tableview and Coredata.
                    </Typography>
                  </Card>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

        {/* Skills */}
        <div className={classes.marginT10} id="skills">

          <div align="center">
            <div className={classes.longLine} ></div>
          </div>
          <div className={classes.marginT5}></div>
          <Typography variant="h5" className={classes.newTitle}>Skills</Typography>
          <div className={classes.marginT3}></div>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <Paper elevation={0}
              >
                <div align="center">
                  <Card elevation={0} className={classes.card3} >
                    <Typography align="center">
                      <AppleIcon style={{ fontSize: 80 }} />
                    </Typography>
                    <Typography variant="h5" align="center" className={classes.fontChange2}>iOS Development</Typography>
                    <div className={classes.marginB2}></div>
                    <Typography variant="body2" align="center" className={classes.fontChange}>Swift</Typography>
                    <Typography variant="body2" align="center" className={classes.fontChange}>Objective-C</Typography>
                  </Card>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper elevation={0}>
                <div align="center">
                  <Card elevation={0} className={classes.card3}>
                    <Typography align="center">
                      <DesktopMacIcon style={{ fontSize: 80 }} />
                    </Typography>
                    <Typography variant="h5" align="center" className={classes.fontChange2}>Web Development</Typography>
                    <Typography variant="body2" align="center" className={classes.fontChange}>React.js / Next.js / Material UI</Typography>
                    <Typography variant="body2" align="center" className={classes.fontChange}>Java</Typography>
                    <Typography variant="body2" align="center" className={classes.fontChange}>JavaScript</Typography>
                    <Typography variant="body2" align="center" className={classes.fontChange}>HTML / CSS</Typography>
                    <Typography variant="body2" align="center" className={classes.fontChange}>BootStrap</Typography>
                    <Typography variant="body2" align="center" className={classes.fontChange}>PHP</Typography>
                    <Typography variant="body2" align="center" className={classes.fontChange}>WordPress</Typography>
                  </Card>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>

      </Container>
      <div className={classes.marginT3}></div>
      <div className={classes.grayBox}>
        {/* contact */}
        <div id="contact">
          <div align="center">

            <Typography variant="h6" className={classes.fontChangeForTitle}>Contact</Typography>
            <div className={classes.marginT3}></div>
            <Typography variant="body2" className={classes.fontChange}>Don’t hesitate to contact me if you have any questions or interesting projects for me.</Typography>
          </div>

          <div align="center" className={classes.marginT5}>
            <Button type="submit" variant="outlined" color="black" aria-controls="simple-menu2" aria-haspopup="true" onClick={handleClick2} >GET IN TOUCH</Button>

            <Menu
              id="simple-menu2"
              anchorEl={anchorE2}
              keepMounted
              open={Boolean(anchorE2)}
              onClose={handleClose2}>
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
      </div>
    </div >
  )
}
