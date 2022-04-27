import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ByUser } from '../../components'
import { getResult } from '../../actions';

export const Home = () => {
  

  const dispatch = useDispatch();

  const search = (searchTerm) => dispatch(getResult(searchTerm));
  
  const username = useSelector(state => state.username);
  console.log(username)

  return (
      <>
        <h2>Hello {username?username:<ByUser getRepos={search}/>}</h2>
      </>
  )
}
