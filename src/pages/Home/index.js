import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ByUser } from '../../components'
import { getResult } from '../../actions';
import './index.css';

export const Home = () => {
  

  const dispatch = useDispatch();

  const search = (searchTerm) => dispatch(getResult(searchTerm));
  
  const username = useSelector(state => state.username);
  console.log(username)

  return (
      <>
        <h1>WELCOME TO REPOS ARE LIFE</h1>
       {username? <><h2>Hello {username}!</h2> <h2>Go to the Repositories page to see your repos!</h2></>:<><h2>Enter your username to see your repos: </h2><ByUser getRepos={search}/></>}
      </>
  )
}
