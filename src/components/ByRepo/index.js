import React, {useState, useEffect} from "react";
import axios from 'axios';

const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

function ByRepo  () {
    const [ username, setUsername ] = useState("");
    const [ nameInput, setNameInput ] = useState("");

    const [reps, setReps] = useState([])
}

const handleInput = e => setNameInput(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        setUsername(nameInput);
        fetchUser(nameInput);
        setNameInput("");
        };

const fetchUser = async (nameInput) => {
    try{
        let { data } = await axios.get(`https://api.github.com/users/${nameInput}/repos`)
        console.log(data[0].name)
        setReps(data)
        setStatus(0)
    } catch(err){
        console.log("Can't find user");
        setStatus(1)
        }
    };

export default ByRepo;
