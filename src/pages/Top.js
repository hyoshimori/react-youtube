import React, { useEffect, useContext } from 'react'
import Layout from '../components/Layout/Layout';
import { fetchPopularData } from "../apis/index";
import { Store } from '../store/index';


const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);
  console.log('hello from TOP');
  useEffect(() => {
    console.log('hello from USEEFFECT');
    fetchPopularData()
      .then(res => {
        console.log('data', res);
        setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
      })
      .catch(err => console.log(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Layout>
      <div>Top page</div>
      console.log('hello from TOP');
    </Layout>
  )
}

export default Top
