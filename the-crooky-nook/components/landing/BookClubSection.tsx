import React from 'react';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

const useStyles = makeStyles({
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
    joinBtn: {
        width: 200,
        margin: 0,
        padding: 15,
        borderColor: 'black',
        borderRadius: '3px 0 0 3px',
    },
    title: {
        fontSize: '5rem',
        fontWeight: 400,
        fontFamily: 'Brachella Drumal',
    }
})

const BookClubSection = () => {
    const classes = useStyles()
    const ratings = [
        {
            id: 34,
            rating: '1M+',
            item: 'Books',
            desc: 'Collections'
        },
        {
            id: 35,
            rating: '40K+',
            item: 'Club',
            desc: 'Members'
        },
        {
            id: 36,
            rating: '5297',
            item: 'Groups',
            desc: 'Created'
        }
    ]
    const groupPics = [
        { id: 345, src: '/images/1.png', offset: '-2rem' },
        { id: 355, src: '/images/2.png', offset: '9rem' },
        { id: 365, src: '/images/3.png', offset: '-9rem' },
        { id: 375, src: '/images/4.png', offset: '2rem' }
    ]

    return (
        <Grid container justifyContent='space-around' spacing={2} style={{ height: '100vh', marginTop: '3rem' }}>
            <Grid container direction='column' justifyContent='center' item md={4} style={{ height: '100%' }}>
                <Typography variant='h1' className={classes.title}>BOOK CLUB </Typography>
                <Typography variant='h1' className={classes.title}>MEETUP.</Typography>
                <Typography style={{ fontSize: 23, marginBottom: '0.5rem', marginTop: '3rem' }}>Meet Kindred Book Lovers In A Local Meetup Book Club!</Typography>
                <Typography style={{ fontSize: 23, marginBottom: '0.5rem' }}>Fiction Or Non-Fiction, Paperback Or Hardcover, You'll</Typography>
                <Typography style={{ fontSize: 23, marginBottom: '0.5rem' }}>Read A New Book Every Month.</Typography>
                <Grid container direction='row' justifyContent='space-between' style={{ margin: '1.5rem 0rem', width: '90%' }} >
                    {ratings.map((rating) => (
                        <Grid item key={rating.id}>
                            <Typography variant='h5' style={{ color: '#F8CE00', fontSize: 55, fontWeight: 600 }}>{rating.rating}</Typography>
                            <Typography>{rating.item}</Typography>
                            <Typography>{rating.desc}</Typography>
                        </Grid>
                    ))}

                </Grid>
                <Grid container direction='row' item style={{ margin: '1rem 0rem' }}>
                    <Button variant='outlined' className={classes.joinBtn}>
                        <Typography style={{ textTransform: 'none', fontSize: 22, letterSpacing: .5, fontWeight: 500 }}>Join Now </Typography>
                    </Button>
                    <div className={classes.iconDiv}>
                        <TrendingFlatIcon />
                    </div>
                </Grid>
            </Grid>
            <Grid container alignItems='center' spacing={1} item md={5}>
                {groupPics.map((picture) => (
                    <Grid item md={3} key={picture.id}>
                        <img height='auto' width='90%' alt='' src={picture.src} style={{ objectFit: 'cover', marginTop: picture.offset }} />
                    </Grid>
                ))}

            </Grid>
        </Grid >
    );
};

export default BookClubSection;