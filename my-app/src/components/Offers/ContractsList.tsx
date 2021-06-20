import { useState, useEffect } from 'react';
import client from "../../api";
import { Field } from 'formik';

function ContractsList({ name, onContractChange }) {
    const [contracts, setContracts] = useState([{ id: 0, name: '' }]);
    //Fix the infinite loop problem with the useEffect() :
    const [value, setValue] = useState('');

    useEffect(() => {
        client.get("/Contracts")
            .then((response) => {
                console.log(response);
                setContracts(response.data);
            }).catch((error) => {
                console.log(error)
            });
    }, [value]);

    return <Field name={name} as="select">
        {contracts.map((contr, key) => <option key={contr.id} value={contr.id}>{contr.name}</option>)}
    </Field>
    // return <select name={name} onChange={() => onContractChange('s')}>{contracts.map((contr, key) => <option key={contr.id} value={contr.id}>{contr.name}</option>)}</select>
}

export { ContractsList };