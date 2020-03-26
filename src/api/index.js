import axios from './axios'
const api = {
    tweet: {
        all: () => axios.get("/alltweet"),
        own: () => axios.get("/alltweet"),
        post: (payload) => axios.post("/posttweet", payload),
    },
    user: {
        details: () => axios.get("/userdetail"),
        all: () => axios.get("/allusers"),
        followers: () => axios.get("/followers"),
        following: () => axios.get("/following"),
        follow: (payload) => axios.post("/follow", payload),
    }
}
export default api