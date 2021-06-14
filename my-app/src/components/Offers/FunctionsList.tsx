import { useState, useEffect } from 'react';
import client from "../../api";

function FunctionsList(name) {
    const [functions, setFunctions] = useState([{ id: 0, name: '' }]);
    //Fix the infinite loop problem with the useEffect() :
    const [value, setValue] = useState('');

    useEffect(() => {
        client.get("/Functions")
            .then((response) => {
                console.log(response);
                setFunctions(response.data);
            }).catch((error) => {
                console.log(error)
            });
    }, [value]);

    return <select name={name}>{functions.map((funct, key) => <option key={funct.id} value={funct.id}>{funct.name}</option>)}</select>
}

export { FunctionsList };