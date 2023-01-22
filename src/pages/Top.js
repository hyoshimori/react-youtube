import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout';
import { fetchPopularData } from "../apis/index";

const Top = () => {
  console.log('hello from TOP');
  useEffect(() => {
    console.log('hello from USEEFFECT');
    fetchPopularData()
      .then(res => {
        console.log('data', res);
      })
      .catch(err => console.log(err));
  }, [])
  return (
    <Layout>
      <div>Top page</div>
      console.log('hello from TOP');
    </Layout>
  )
}

export default Top
