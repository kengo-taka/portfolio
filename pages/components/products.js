import Image from 'next/image';
import styles from '/styles/Home.module.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Products = () => {
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
  return (
    <div>

      <div id="products">
        <div align="center">
          <div className={styles.longLine} ></div>
        </div>
        <div className={styles.mt5}></div>
        <motion.h2 className={styles.productsTitle}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={boxVariants}>Products</motion.h2>
        <p className={styles.productsText1}>Here is a selection of projects I have worked on in the recent years.</p>
        <p className={styles.productsText1}>Click on the thumbnails below for more information.</p>
        <div className={styles.mt5}></div>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper elevation={0} >
              <div align="center">
                <Card elevation={0} className={styles.cardWeb}>
                  <Link href="https://frescura-cafe.vercel.app">
                    <Image src="/frescura.png" width={350} height={240} alt="hi" className={styles.imageChange} />
                  </Link>
                </Card>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper elevation={0} >
              <div align="center" >
                <Card elevation={0} className={styles.cardWeb}>
                  <div className={styles.mt2}></div>
                  <h2 className={styles.productsText2}>Cafe website</h2>
                        <div className={styles.orangeLineP1}></div>
                  <div className={styles.mt3}></div>
                  <h4 className={styles.productsText3}>It is a cafe website. The cafe is located in the center of Zacatecas city in Mexico. It is made by Next.js, Material UI and so on.</h4>
                </Card>
              </div>
            </Paper>
          </Grid>
        </Grid>

        <div className={styles.mt5}></div>
        <div align="center">
          <div className={styles.longLine} ></div>
        </div>
        <div className={styles.mt5}></div>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper elevation={0} >
              <div align="center">
                <Card elevation={0} className={styles.cardWeb}>
                  <Link href="http://ayaship.marine-ocean.com/">
                    <Image src="/ayaship.png" width={350} height={240} alt="hi" className={styles.imageChange} />
                  </Link>
                </Card>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper elevation={0} >
              <div align="center" >
                <Card elevation={0} className={styles.cardWeb}>
                  <div className={styles.mt2}></div>
                  <h2 className={styles.productsText2}>Medical website</h2>
                        <div className={styles.orangeLineP1}></div>
                  <div className={styles.mt3}></div>
                  <h4 className={styles.productsText3}>It is a website for AYA (Adolescent and Young Adult) patients with intractable diseases such as cancer in Japan.It is made by Wordpress, PHP and BootStrap.</h4>
                </Card>
              </div>
            </Paper>
          </Grid>
        </Grid>

        <div className={styles.mt5}></div>
        <div align="center">
          <div className={styles.longLine} ></div>
        </div>
        <div className={styles.mt5}></div>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper elevation={0} >
              <div align="center">
                <Card elevation={0} className={styles.cardWeb}>
                  <Link href="http://apple.marine-ocean.com/">
                    <Image src="/apple.png" width={350} height={240} alt="hi" className={styles.imageChange} />
                  </Link>
                </Card>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper elevation={0} >
              <div align="center" >
                <Card elevation={0} className={styles.cardWeb}>
                  <div className={styles.mt2}></div>
                  <h2 className={styles.productsText2}>Apple website</h2>
                      <div className={styles.orangeLineP1}></div>
                  <div className={styles.mt3}></div>
                  <h4 className={styles.productsText3}>It is a copy website of Apple Japan. It is made by BootStrap.</h4>
                </Card>
              </div>
            </Paper>
          </Grid>
        </Grid>

        <div className={styles.mt5}></div>
        <div align="center">
          <div className={styles.longLine} ></div>
        </div>
        <div className={styles.mt5}></div>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper elevation={0} >
              <div align="center">
                <Card elevation={0} className={styles.cardWeb}>
                  <Link href="http://company.marine-ocean.com/">
                    <Image src="/company.png" width={350} height={240} alt="hi" className={styles.imageChange} />
                  </Link>
                </Card>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper elevation={0} >
              <div align="center" >
                <Card elevation={0} className={styles.cardWeb}>
                  <div className={styles.mt2}></div>
                  <h2 className={styles.productsText2}>Company website</h2>
                    <div className={styles.orangeLineP1}></div>
                  <div className={styles.mt3}></div>
                  <h4 className={styles.productsText3}>It is a website of imaginary company. It is made by BootStrap.</h4>
                </Card>
              </div>
            </Paper>
          </Grid>
        </Grid>


        <div className={styles.mt5}></div>
        <div align="center">
          <div className={styles.longLine} ></div>
        </div>
        <div className={styles.mt5}></div>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper elevation={0}>
              <div align="center">
                <Card elevation={0} className={styles.cardIOS}>
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
                <Card elevation={0} className={styles.cardIOS}>
                  <div className={styles.mt2}></div>
                  <h2 className={styles.productsText2}>Hang-Out-Planner</h2>
                                          <div className={styles.orangeLineP1}></div>
                  <div className={styles.mt3}></div>
                  <h4 className={styles.productsText3}>App for people who are not familiar with the user's currentlocation(e.g. tourists, transients living in the city, etc.)
                  Shows the directions and route option between each place. It Uses MapKit, WebAPI and Tableview.
                    </h4>
                </Card>
              </div>
            </Paper>
          </Grid>
        </Grid>

        <div className={styles.mt5}></div>
        <div align="center">
          <div className={styles.longLine} ></div>
        </div>
        <div className={styles.mt5}></div>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper elevation={0}>
              <div align="center">
                <Card elevation={0} className={styles.cardIOS}>
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
                <Card elevation={0} className={styles.cardIOS}>
                  <div className={styles.mt2}></div>
                  <h2 className={styles.productsText2}>To Do List</h2>
                  <div className={styles.orangeLineP1}></div>
                  <div className={styles.mt3}></div>
                  <h4 className={styles.productsText3}>App for people who want to manage their schedule. It uses Tableview and Coredata.</h4>
                </Card>
              </div>
            </Paper>
          </Grid>
        </Grid>

        <div className={styles.mt5}></div>
        <div align="center">
          <div className={styles.longLine} ></div>
        </div>
        <div className={styles.mt5}></div>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper elevation={0}>
              <div align="center">
                <Card elevation={0} className={styles.cardIOS}>
                  <Link href="https://github.com/kengo-taka/collectionviewAssignment">
                    <Image src="/collection.png" width={200} height={370} alt="h" />
                  </Link>
                </Card>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Paper elevation={0} >
              <div align="center" >
                <Card elevation={0} className={styles.cardIOS}>
                  <div className={styles.mt2}></div>
                  <h2 className={styles.productsText2}>Cafe CollectionView</h2>
                  <div className={styles.orangeLineP1}></div>
                  <div className={styles.mt3}></div>
                  <h4 className={styles.productsText3}>App for showing the menu of the cafe. It is made by collectionview, UISearchController and  UICollectionViewDiffableDataSource</h4>
                </Card>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Products;