import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKEPOST } from '../constants/actionTypes';

export default (posts = [], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter( (post) => post._id !==  action.payload._id );
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
        case LIKEPOST:
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post);
        case FETCH_ALL:
            return action.payload;
        default:
            return posts;
    }
}