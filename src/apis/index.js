import axios from 'axios'

const KEY = process.env.REACT_APP_YOUTUBE_KEY

const youtube = axios.create({baseURL: 'https://www.googleapis.com/youtube/v3'})

export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params: {
      part: 'snippet',
      maxResults: 40,
      key: KEY,
      regionCode: "fr",
      type: 'video',
      chart: 'mostPopular'
    }
  })
}
