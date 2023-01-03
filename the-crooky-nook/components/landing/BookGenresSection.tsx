import { Divider, Grid, ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    title: {
        fontSize: '5rem',
        // fontWeight: 400,
        fontFamily: 'Brachella Drumal',
        textAlign: 'center',
        margin: '2rem 0rem',
    }
})

const genres = [
    { id: 90, genre: 'Adventure' },
    { id: 91, genre: 'Biography' },
    { id: 92, genre: 'Classic' },
    { id: 93, genre: 'Random Selection' },
    { id: 94, genre: 'Harvard Classics' },
    { id: 95, genre: 'Designing Book' },
    { id: 96, genre: 'Philosophy' },
    { id: 97, genre: 'Science Fiction' },
    { id: 98, genre: 'Short Story Collection' },
    { id: 99, genre: 'Thriller' },
    { id: 100, genre: 'Travel' },
    { id: 101, genre: 'Western' },
    { id: 102, genre: 'History' }
]
const BookGenresSection = () => {
    const classes = useStyles()
    return (
        <Grid container style={{ minHeight: '100vh' }}>
            <Grid item xs={12}>
                <Typography variant='h1' className={classes.title}>BROWSE GENRES</Typography>
                <Divider variant='middle' style={{ width: '80%', alignSelf: 'center', marginBottom: '2rem' }} />
            </Grid>
            <Grid item sm={4} style={{ padding: '2rem' }}>
                {genres.map((genre) => (
                    <ListItem key={genre.id}>
                        <ListItemText secondary={<Typography variant='h5' color='textSecondary'>{genre.genre}</Typography>} />
                    </ListItem>
                ))}
            </Grid>
            <Grid container spacing={3} direction='row' item sm={8} style={{ flexWrap: 'wrap', margin: '2rem 0rem' }}>
                {[1, 2, 3, 4].map((item) => (
                    <Grid item xs={5} style={{ height: 500, marginBottom: '7rem' }} key={item}>
                        <div style={{ height: '90%', width: '100%', background: '#DCDCDC', display: 'flex', justifyContent: 'center', borderRadius: 12, position: 'relative' }}>
                            <div style={{ width: '65%', height: '95%', position: 'absolute', top: '-2rem' }}>
                                <img width='100%' height='100%' alt='' src='/images/thepsychlogyofmoney.jpg' style={{ boxShadow: '-8px 8px 8px 3px rgba(0,0,0,0.12' }} />
                            </div>

                        </div>
                        <Typography variant='h5' style={{ marginTop: '1rem' }}>A Way Of Living</Typography>
                        <Typography color='textSecondary' variant='h6'> By Phaidon</Typography>
                    </Grid>
                ))}

            </Grid>
        </Grid>
    );
};

export default BookGenresSection;