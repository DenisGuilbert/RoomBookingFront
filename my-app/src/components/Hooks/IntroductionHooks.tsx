import React, { useState, useEffect } from 'react';
import axios from 'axios';
import client from "../../api";

export default function IntroductionHooks() {
    // Déclare une nouvelle variable d'état, qu’on va appeler « count », fruit et setTodos
    const [count, setCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [newRole, setNewRole] = useState('');
    const [roles, setRoles] = useState(["Normal", "User", "Admin", "Super admin"]);
    const [responseData, setResponseData] = useState([{ id: 0, name: '' }]);

    const onRoleChange = (event) => {
        setNewRole(event.target.value);
    };

    //Equivalent to componentDidMount and componentDidUpdate
    //Hook effect :
    useEffect(() => {
        // Update the document's title
        //Hooks are note immediate
        document.title = `You\'ve clicked ${totalCount} time(s)`;
    });

    useEffect(() => {
        //TODO : use API and Axios, like usual
        //client.get("/Rooms");
        axios({
            "method": "GET",
            "url": "https://localhost:44387/Rooms",
        })
            .then((response) => {
                setResponseData(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);

    return (
        <div className="divGlobal">
            <div className="divCenter">
                <label className="labelTitle">Test your hooks here : </label>
            </div>
            <br />
            <div className="divChild">
                <label>Counters : </label>
            </div>
            <div className="divChild">
                <label>You've clicked {totalCount} time(s) total.</label>
                <br />
                <label>The counter is actually of {count}.</label>
            </div>
            <br />
            <div className="divChild">
                <button onClick={() => { setCount(count + 1); setTotalCount(totalCount + 1) }}>Add 1 !</button>
                <button onClick={() => { setCount(count - 1); setTotalCount(totalCount + 1) }}>Remove 1 !</button>
            </div>
            <br />
            <div className="divChild">
                <input type="text" placeholder="Add a role here !" id="newRole" value={newRole} onChange={onRoleChange}></input>
                <button onClick={() => setRoles(roles.concat(newRole))}>Add</button>
                <br />
                <select> {roles.map((role, key) => <option key={key} value={key}>{role}</option>)}</select>
            </div>
            <div className="divChild">
                <ul className='ulDense'>
                    {responseData.map((res, key) => <li>{res.name}</li>)}
                </ul>
            </div>
        </div>
    );
}