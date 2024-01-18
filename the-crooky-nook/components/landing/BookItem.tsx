import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const BookItem = () => {
    return (
        <div style={{ height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid rgba(0,0,0,0.12)', padding: 22 }}>
            <div style={{ textAlign: 'center' }}>
                <Typography>Anatomy</Typography>
                <Typography>Karina Vigil</Typography>
            </div>
            {/* <div style={}> */}
            <Card style={{ height: '85%', width: 400, background: '#DCDCDC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img height='75%' width='auto' alt='' src='/images/thepsychlogyofmoney.jpg' style={{ boxShadow: '8px 8px 8px 3px rgba(0,0,0,0.12' }} />
            </Card>
        </div>


    );
};

export default BookItem;