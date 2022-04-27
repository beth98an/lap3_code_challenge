import React from 'react';
import { useSelector} from 'react-redux';

export const Search=() =>{
  
  const username = useSelector(state => state.username);
  console.log(username)
  const repos = useSelector(state => state.repos);
  console.log(repos)
  const error = useSelector(state => state.error);

  const renderRepos = (repos) => {
    const repoCards = repos.map((r, index) => (
    <article key={index}>
      <h2>{r.name}</h2>
      <ul>
        <li>Forks: {r.forks}</li>
        <li>Language: {r.language}</li>
      </ul>
      </article>))
      return repoCards
  }

  return (
      <>
        <h2>Hello {username?username:''}! Here are your repos!</h2>
        { error ? <p role='alert'>Oops there's been an error!</p> : renderRepos(repos) } 
      </>
  )
}


export default Search
