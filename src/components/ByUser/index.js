import React, { useState } from 'react';

export const ByUser = ({getRepos}) => {
    const [username, setUsername] = useState();

    const updateUsername = e => {
        const input = e.target.value
        setUsername(input)
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(username)
        getRepos(username)
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter your github username' value={username} onChange={updateUsername} />
        <input type='submit' value='Search' />
    </form>
    </>
  )
}
