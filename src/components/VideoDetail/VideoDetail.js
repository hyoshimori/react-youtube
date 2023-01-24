import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchSelectedData } from '../../apis';

const VideoDetail = () => {
  const location = useLocation();
  // ********** NOTE ****************************************** //
  // useEffect and async/await are not compatible               //
  // because useEffect expects synchronous function             //
  // while async/await deal with async function.                //
  // It's recommended to use "then callback" or use             //
  // "useState" and "useEffect" together to handle async data.  //
  // ********************************************************** //
  // In this case, it is defined outside of the useEffect and   //
  // called with the method                                     //
  // ********** NOTE ****************************************** //
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('v')
    await fetchSelectedData(id).then((res) => {
      console.log('res', res);
    })
  }
  useEffect(() => {
    setSelectedVideo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>VideoDetail</div>
  )
}

export default VideoDetail
