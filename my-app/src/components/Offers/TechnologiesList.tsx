import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios';
import client from "../../api";

function TechnologiesList() {
    const [technologies, setTechnologies] = useState([{ id: 0, name: '' }]);
    //Fix the infinite loop problem with the useEffect() :
    const [value, setValue] = useState('');

    useEffect(() => {
        client.get("/Technologies")
            .then((response) => {
                console.log(response);
                setTechnologies(response.data);
            }).catch((error) => {
                console.log(error)
            });
    }, [value]);

    return <select multiple>{technologies.map((tech, key) => <option key={tech.id} value={tech.id}>{tech.name}</option>)}</select>
}

export { TechnologiesList };