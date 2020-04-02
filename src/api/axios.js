import axiosLib from 'axios';
//now all apis are mock
// Free plan limit in no of api, so 2 accounts mockapi.io
export const axiosGraphQl = axiosLib.create({
    baseURL: "http://localhost:3000/admin/api",
});

export const axios1 = axiosLib.create({
    baseURL: "https://5e7c2358a917d70016682eb7.mockapi.io/tweetx",
});

export const axios2 = axiosLib.create({
    baseURL: "https://5e7c40e4a917d70016683096.mockapi.io/tweetx",
});


