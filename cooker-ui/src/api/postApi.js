import axios from './axios';

export const getPosts = () => {
    return axios.get('http://localhost:8000/post/1', {withCredentials: false});
}
