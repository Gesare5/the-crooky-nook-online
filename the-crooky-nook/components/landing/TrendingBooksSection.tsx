import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import BookItem from './BookItem';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import useCustomScroll from './useCustomScroll';

const useStyles = makeStyles({
    backButton: {
        borderColor: '#000',
    },
    cardsContainer: {
        flexWrap: 'nowrap',
        overflow: 'hidden',
        overflowX: 'hidden',
        position: 'relative',
        height: '70%'
    },
    forwardButton: {
        backgroundColor: '#000',
        color: '#f9f9f9',
        '&:hover': {
            color: '#000'
        }
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
    seeAllBtn: {
        width: 200,
        margin: 0,
        padding: 15,
        borderColor: 'black',
        borderRadius: '3px 0 0 3px',
    },
    title: {
        fontSize: '5rem',
        // fontWeight: 400,
        fontFamily: 'Brachella Drumal',
        textAlign: 'center',
        margin: '2rem 0rem',
    }
})
const TrendingBooksSection = () => {
    const classes = useStyles()
    const contentWrapper = React.useRef(null);
    const { scrollLeft, scrollRight } = useCustomScroll(contentWrapper)
    return (
        <Grid container style={{ height: '100vh' }}>
            <Grid item xs={12}>
                <Typography variant='h1' className={classes.title}>TOP TRENDING BOOKS</Typography>
            </Grid>
            <Grid container direction='row' justifyContent='space-between' item xs={12} style={{ padding: '20px 28px', marginBottom: '1rem' }}>
                <Button
                    variant='outlined'
                    size='large'
                    className={classes.backButton}
                    onClick={scrollLeft}
                >
                    <ArrowRightAltIcon style={{ transform: 'rotate(180deg)' }} />
                </Button>
                <Button
                    variant='contained'
                    size='large'
                    className={classes.forwardButton}
                    onClick={scrollRight}
                >
                    <ArrowRightAltIcon />
                </Button>
            </Grid>
            <Grid container direction='row' alignItems='flex-end' ref={contentWrapper} item xs={12} className={classes.cardsContainer} >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div key={item} style={{ height: '100%' }}>
                            <BookItem />
                        </div>
                    ))
                }
            </Grid>
            <Grid container direction='row' justifyContent='center' item xs={12} style={{ margin: '1rem 0rem' }}>
                <Button variant='outlined' className={classes.seeAllBtn}>
                    <Typography style={{ textTransform: 'none', fontSize: 22, letterSpacing: .5, fontWeight: 500 }}>See All </Typography>
                </Button>
                <div className={classes.iconDiv}>
                    <TrendingFlatIcon />
                </div>
            </Grid>
        </Grid>
    );
};

export default TrendingBooksSection;