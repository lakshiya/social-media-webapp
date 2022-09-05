import { Container, Typography, AppBar, Grow, Grid} from '@material-ui/core';
import socio from './images/memories.png'

//  useState, useEffect useDispatch etc. are all called as Hooks
import React , {useEffect, useState} from 'react';
// import Post from './components/Posts/Post/Post.js'
import Form from './components/Form/Form.js'
import Posts from './components/Posts/Posts';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts';

// Since we use Matrial ui, this application is out of the box, responsive to Mobile devices

const App = () => {
  
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxidth = 'lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Socio</Typography>
        <img className={classes.image} src={socio} alt='socio' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid className='mainContainer' container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
