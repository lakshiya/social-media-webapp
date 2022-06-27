import axios from 'axios';

const url = 'http://localhost:3400/posts'

export const fetchPosts = () => axios.get(url);