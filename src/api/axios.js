import axiosLib from 'axios';

const axios = axiosLib.create({
    baseURL: "http://5e7c2358af917d70016682eb7.mockapi.io/tweetx",
});

export default axios;
