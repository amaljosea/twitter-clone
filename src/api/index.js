import { axiosGraphQl, axios1, axios2 } from './axios'
import { GET_ALL_TWEETS } from '../graphql/Tweet/query'

const api = {
    tweet: {
        all: () => axiosGraphQl.post("/", {
            query: GET_ALL_TWEETS,
        }),
        own: () => axios1.get("/alltweet"),
        post: (payload) => axios1.post("/posttweet", payload),
    },
    user: {
        details: () => axios1.get("/userdetail"),
        all: () => axios1.get("/allusers"),
        followers: () => axios1.get("/allusers"),
        following: () => axios2.get("/following"),
        follow: (payload) => axios2.post("/follow", payload),
    }
}
export default api