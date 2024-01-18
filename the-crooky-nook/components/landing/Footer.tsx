import React from 'react';
import { Grid, IconButton, ListItem, ListItemText, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <Grid container style={{ height: '65vh', marginTop: '4rem' }}>
            <Grid item xs={12}>
                <Typography variant='h3' style={{ textAlign: 'center', marginBottom: '0rem', background: '#DCDCDC' }}>TheCrookyNook</Typography>
            </Grid>
            <Grid container direction='column' justifyContent='flex-end' item sm={3} style={{ padding: '2rem', background: 'yellow' }}>
                <ListItem >
                    <ListItemText primary={<Typography variant='h4'>Home</Typography>} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={<Typography variant='h4'>Shop</Typography>} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={<Typography variant='h4'>Ebooks</Typography>} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={<Typography variant='h4'>Membership</Typography>} />
                </ListItem>
                <Grid container spacing={2} direction='row' style={{ flexWrap: 'wrap', width: '70%', marginTop: '3rem', }}>
                    <Grid item xs={3}>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={3}>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={3}>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={3}>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='space-around' style={{ flexWrap: 'wrap' }} item sm={6}>
                <Grid item xs={12}>
                    <Typography variant='h4' style={{ textAlign: 'center', fontFamily: 'Brachella Drumal', fontSize: 38 }}>The Latest From The Blog</Typography>
                </Grid>
                <Grid item sm={5} style={{ height: 370 }}>
                    <Typography style={{ marginBottom: '.5rem', marginLeft: '3.5rem' }}>How To Copyright A Book</Typography>
                    <img height='95%' width='auto' alt='' src='/images/12.png' />
                </Grid>
                <Grid item sm={5} style={{ height: 370 }}>
                    <Typography style={{ marginBottom: '.5rem', marginLeft: '3rem' }} >Proofreading Tips For Bloggers</Typography>
                    <img height='95%' width='auto' alt='' src='/images/13.png' />
                </Grid>
            </Grid>
            <Grid container item sm={3}>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={10} style={{ background: '#F5CC00', position: 'relative' }}>
                    <div style={{ transform: 'rotate(-90deg)', position: 'absolute', left: '-9rem', bottom: '9.5rem' }} >
                        <Typography variant='h2' style={{ fontFamily: 'Brachella Drumal' }}>Ready To Make</Typography>
                        <Typography variant='h2' style={{ fontFamily: 'Brachella Drumal' }}>Yourself Peace?</Typography>
                        <Typography variant='h5' style={{ color: '#fff', marginTop: '1rem', textAlign: 'center' }}>Download The App</Typography>

                    </div>
                    <div style={{ position: 'absolute', left: '8rem', bottom: '4rem' }}>
                        <img alt='' src='/images/14.png' />
                    </div>
                </Grid>
            </Grid>
        </Grid >
    );
};

export default Footer;