import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchSelectedData } from '../../apis';
import { Store } from '../../store/index';

const VideoDetail = () => {
  // Passing store to update the state //
  const { globalState, setGlobalState } = useContext(Store)

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
    // An instantiation of URLSearchParams class //
    // location.search is a property of the location object in JavaScript, which represents the current URL of the web page //
    // Search property returns the query string of the URL comes after "?" //
    const id = searchParams.get('v')
    // get() method is a method of the URLSearchParams class //
    await fetchSelectedData(id).then((res) => {
      const item = res.data.items.shift()
      setGlobalState({type: "SET_SELECTED",payload: {selected: item} })
      // This goes to store/index.js and update the state with redcer //
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
