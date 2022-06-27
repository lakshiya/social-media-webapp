import { Container, Typography, AppBar, Grow, Grid} from '@material-ui/core';
import socio from './images/memories.png'
import React , {useEffect} from 'react';
// import Post from './components/Posts/Post/Post.js'
import Form from './components/Form/Form.js'
import Posts from './components/Posts/Posts';
import useStyles from './styles.js';
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect( () => {
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
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
