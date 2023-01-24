import React from 'react'
import Layout from '../components/Layout/Layout';
import VideoDetail from '../components/VideoDetail/VideoDetail';


const Watch = () => {
  console.log("watch")
  return (
    <Layout>
      <VideoDetail />
      <div>Watch page</div>
    </Layout>
  )
}

export default Watch
