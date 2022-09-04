import React from "react";
import Post from './Post/Post.js'
import useStyles from './styles.js';
import { Grid, CircularProgress} from '@material-ui/core'
import { useSelector } from 'react-redux';

const Posts = ( {setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles(); 
 
    console.log(posts); 
    console.log(posts.length)

    return (

        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                ))} 
                
            </Grid>
        )
        // <>
        //     <h1>POSTS</h1>
        //     <Post></Post>
        //     <Post></Post>
        // </>
    );
};

export default Posts;