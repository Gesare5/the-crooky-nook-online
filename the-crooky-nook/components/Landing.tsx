import React from 'react';
import clsx from 'clsx';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import Navbar from './Navbar';

const useStyles = makeStyles({
    exploreBtn: {
        width: 200,
        margin: 0,
        padding: 15,
        borderColor: 'black',
        borderRadius: '3px 0 0 3px',
    },
    firstBook: {
        marginRight: '11rem',
        background: '#6C8E7A',
        marginTop: '4.5rem',
    },
    iconDiv: {
        width: 70,
        height: '100%',
        background: 'black',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0 3px 3px 0',
    },
    imageGrid: {
        height: 400,
        width: 300,
        transform: 'rotate(10deg)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainTitle: {
        fontSize: '5rem',
        fontWeight: 400,
        fontFamily: 'Brachella Drumal',
        marginBottom: '3rem',
    },
    secondBook: {
        marginLeft: '15.3rem',
        background: '#EDEB00',
        marginTop: '-4rem'
    },
})

const Landing = () => {

    const classes = useStyles();

    return (
        <div style={{ minHeight: '100vh', background: "url(/images/grainy.jpg" }}>
            <Navbar />
            <Grid container style={{ padding: '2rem', height: '70%', marginTop: '3rem' }} justifyContent='space-around'>
                <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem' }}>
                    <div className="variant">
                        <Typography variant='h1' className={classes.mainTitle}>WHAT BOOK ARE YOU LOOKING FOR?</Typography>
                    </div>
                    <Typography style={{ fontSize: 25, marginBottom: '0.6rem' }}>Not Sure What To Read Next? Explore Our Catalog</Typography>
                    <Typography style={{ fontSize: 25, marginBottom: '5rem' }}>Of Public Domain Books With Our Editor</Typography>

                    <div style={{ display: 'flex' }}>
                        <Button variant='outlined' className={classes.exploreBtn}>
                            <Typography style={{ textTransform: 'none', fontSize: 22, letterSpacing: .5, fontWeight: 500 }}>Explore Now </Typography>
                        </Button>
                        <div className={classes.iconDiv}>
                            <TrendingFlatIcon />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={5} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Grid className={clsx(classes.imageGrid, classes.firstBook)}>
                        <img height='70%' width='64%' alt='' src="/images/thepsychlogyofmoney.jpg" />
                    </Grid>
                    <Grid className={clsx(classes.imageGrid, classes.secondBook)}>
                        <img height='70%' width='64%' alt='' src="/images/inovation.jpg" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid style={{ width: '100%', height: 280, marginTop: '1rem' }} >
                <img width='100%' height='100%' alt='' src='/images/banner.png' />
            </Grid>
        </div>
    );
};

export default Landing;