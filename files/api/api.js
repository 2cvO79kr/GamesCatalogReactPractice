import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api/',
    headers: {
        'x-rapidapi-key': 'someKey',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
})

export const gamesAPI = {
    getModifyList(data) {
        return instance.get(`games`, {
            params: data
        })
    },
    getCurrentGame(currentId) {
        return instance.get(`game`, {
            params: {
                id: currentId
            }
        })
    },
    getTagFiter(data) {
        return instance.get(`filter`, {
            params: data
        })
    },
}
