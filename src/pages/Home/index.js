<<<<<<< HEAD
import React from "react";

function Home() {

    return (
        <>
        <div id="welcome">
            <h1>Hello!</h1>
            <h2>Welcome to Github, that is not actually Github</h2>
        </div>
        </>
    );
};

export default Home;
=======
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
>>>>>>> 02987e5776e46426a0035eb237f085c97e803614
