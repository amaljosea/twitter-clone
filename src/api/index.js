import { axios1, axios2 } from './axios'
const api = {
    tweet: {
        all: () => axios1.get("/alltweet"),
        own: () => axios1.get("/alltweet"),
        post: (payload) => axios1.post("/posttweet", payload),
    },
    user: {
        details: () => axios1.get("/userdetail"),
        all: () => axios1.get("/allusers"),
        followers: () => axios1.get("/allusers"),
        following: () => axios2.get("/following"),
        follow: (payload) => axios1.post("/follow", payload),
    }
}
export default api