import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ByUser } from '../../components'
import { getResult } from '../../actions';

export const Home = () => {
  const username = useSelector(state => state.username);
  const repos = useSelector(state => state.repos);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  const dispatch = useDispatch();

  const search = (searchTerm) => dispatch(getResult(searchTerm));

  const renderRepos = () => {
    repos.map((r, index) => (
    <article key={index}>
      <h2>{r.name}</h2>
      <ul>
        <li>Forks: {r.forks}</li>
        <li>Language: {r.language}</li>
      </ul>
      </article>))
  }
  const renderResult = () => loading ? <p>Loading . . .</p> : renderRepos

  return (
      <>
        <h2>Hello {username?username:''}!</h2>
        <ByUser getRepos={search}/>

        { error ? <p role='alert'>Oops there's been an error!</p> : renderResult() } 
      </>
  )
}
