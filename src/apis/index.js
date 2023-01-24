import axios from 'axios'

const KEY = process.env.REACT_APP_YOUTUBE_KEY

const youtube = axios.create({baseURL: 'https://www.googleapis.com/youtube/v3'})

// ********** NOTE ********** //
// Refactor the overlapping parts
// ********** NOTE ********** //

const params = {
  part: 'snippet',
      maxResults: 40,
      key: KEY,
      regionCode: "fr",
      type: 'video',
}

// ********** NOTE ********** //
// Fetching the most popular vids from youtube api
// ********** NOTE ********** //

export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params: {
      ...params,
      chart: 'mostPopular'
    }
  })
}

// ********** NOTE ********** //
// Fetching id from the link after "watch?v=..."
// ********** NOTE ********** //

export const fetchSelectedData = async (id) => {
  return await youtube.get('videos', {
    params: {
      ...params,
      id
    }
  })
}
