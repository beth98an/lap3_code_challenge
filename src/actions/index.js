import axios from 'axios';

const loading = username=> ({ type: 'LOADING', payload: username });

const loadResult = (data) => ({ 
    type: 'LOAD_RESULT',
    payload: data
});

export const getResult = searchTerm => {
    return async dispatch => {
        dispatch(loading(searchTerm));
        try {
            const repos = await fetchRepos(searchTerm);
            dispatch(loadResult(repos))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};
export const fetchRepos = async(username) =>{
    try {
        const resp = await axios.get(`https://api.github.com/users/${username}/repos`)
        const data = resp.data
        console.log(data)
        return data
    }
    catch(err) {
        if (data.status === 404) { throw Error('That\'s not a valid username!') }
        throw new Error(err.message)
    }
}

