import { Component } from 'react';
import _ from "lodash";
import { Offer } from '../../domain/Offer'
import { Technology } from '../../domain/Technology'
import { RootState } from '../../app/store'
import { connect } from "react-redux";
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import client from "../../api";
import { Formik, Field, Form } from 'formik';
import { TechnologiesList } from "../Offers/TechnologiesList";
import { ContractsList } from "../Offers/ContractsList";
import { FunctionsList } from "../Offers/FunctionsList";

export default function CreateOffer() {
    const [offerList, setOfferList] = useState([{
        id: 0,
        title: '',
        company: '',
        area: '',
        activity: false,
        freeInput: false,
        finalCustomer: false,
        gondolaHead: false,
        idFunction: 0,
        technologiesIds: [],
        idContract: 0,
        location: '',
        shortDescription: '',
        description: ''
    }]);

    const [technologyList, setTechnologyList] = useState([{ id: 0, name: '' }]);
    //Fix the infinite loop problem with the useEffect() :
    const [value, setValue] = useState('');

    useEffect(() => {
        getOffers();
        //getTechnologies();
    }, [value]);

    function getOffers() {
        client.get('/Offers').then((response) => {
            setOfferList(response.data);
        }).catch((error) => {
            console.log(error)
        });
    }

    function getTechnologiesNames(technologiesIds: number[]) {
        let result: string[] = new Array();

        if (technologyList != null && technologiesIds != null) {
            result = technologyList.filter(x => technologiesIds.includes(x.id)).map(x => x.name);
        }
        return result;
    }

    function handleSubmitButton(o) {
        console.log(o);
        client.post("/Offers", {
            title: o.title,
            company: o.company,
            area: o.area,
            activity: o.activity,
            freeInput: o.freeInput,
            finalCustomer: o.finalCustomer,
            gondolaHead: o.gondolaHead,
            idFunction: o.idFunction,
            technologiesIds: o.technologiesIds,
            idContract: o.idContract,
            location: o.location,
            shortDescription: o.shortDescription,
            description: o.description
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error)
        });
    }
    function onContractsChange(e) {
        console.log('abc');
        console.log(e)
    }

    return (

        <div>
            <Formik
                initialValues={{
                    id: 0,
                    title: '',
                    company: '',
                    area: '',
                    activity: false,
                    freeInput: false,
                    finalCustomer: false,
                    gondolaHead: false,
                    idFunction: 0,
                    technologiesIds: [],
                    idContract: 0,
                    location: '',
                    shortDescription: '',
                    description: ''
                }}
                onSubmit={async (values) => {
                    //call create user method
                    handleSubmitButton(values);
                }}>
                <Form>
                    <div className="divGlobal">

                        <div className="divFlex">
                            <div className="divFlexChildLeft">
                                <label htmlFor="title">Titre * </label>
                            </div>
                            <div className="divFlexChildRight">
                                <Field id="title" name="title" placeholder="Titre *" />
                            </div>
                        </div>

                        <div className="divFlex">
                            <div className="divFlexChildLeft">
                                <label htmlFor="company">Société * </label>
                            </div>
                            <div className="divFlexChildRight">
                                <Field id="company" name="company" placeholder="Société *" />
                            </div>
                        </div>

                        <div className="divFlex">
                            <div className="divFlexChildLeft">
                                <label htmlFor="area">Secteur </label>
                            </div>
                            <div className="divFlexChildRight">
                                <Field id="area" name="area" placeholder="Secteur" />
                            </div>
                        </div>

                        <div className="divFlex">
                            <div className="divFlexChildLeft">
                                <label htmlFor="activity">Activité </label>
                            </div>
                            <div className="divFlexChildRight">
                                <Field type="checkbox" name="activity" />
                            </div>
                        </div>

                        <div className="divFlex">
                            <div className="divFlexChildLeft">
                                <label htmlFor="freeInput">Saisie libre </label>
                            </div>
                            <div className="divFlexChildRight">
                                <Field type="checkbox" name="freeInput" />
                            </div>
                        </div>

                        <div className="divFlex">
                            <div className="divFlexChildLeft">
                                <label htmlFor="finalCustomer">Client final </label>
                            </div>
                            <div className="divFlexChildRight">
                                <Field type="checkbox" name="finalCustomer" />
                            </div>
                        </div>

                        <div className="divFlex">
                            <div className="divFlexChildLeft">
                                <label htmlFor="gondolaHead">Tête de gondole </label>
                            </div>
                            <div className="divFlexChildRight">
                                <Field type="checkbox" name="gondolaHead" />
                            </div>
                        </div>

                        <div className="divFlex">
                            <div className="divFlexChildLeft">
                                <label htmlFor="function">Fonction * </label>
                            </div>
                            <div className="divFlexChildRight">
                                <FunctionsList name="idFunction" />
                            </div>
                        </div>

                        <div className="divFlex">
                            <div className="divFlexChildLeft">
                                <label htmlFor="technologies">Technologies : </label>
                            </div>
                            <div className="divFlexChildRight">
                                <TechnologiesList />
                            </div>
                        </div>

                        <div className="divFlex">
                            <div className="divFlexChildLeft">
                                <label htmlFor="contract">Contrat * </label>
                            </div>
                            <div className="divFlexChildRight">
                                <ContractsList name="idContract" onChange={onContractsChange} />
                            </div>
                        </div>

                        <div className="divFlex">
                            <div className="divFlexChildLeft">
                                <label htmlFor="location">Localisation * </label>
                            </div>
                            <div className="divFlexChildRight">
                                <Field id="location" name="location" placeholder="Localisation *" />
                            </div>
                        </div>

                        <div className="divFlex">
                            <div className="divFlexChildLeft">
                                <label htmlFor="shortDescription">Description courte * </label>
                            </div>
                            <div className="divFlexChildRight">
                                <Field as='textarea' id="shortDescription" name="shortDescription" placeholder="Description courte *" />
                            </div>
                        </div>

                        <div className="divFlex">
                            <div className="divFlexChildLeft">
                                <label htmlFor="description">Description * </label>
                            </div>
                            <div className="divFlexChildRight">
                                <Field as='textarea' id="description" name="description" placeholder="Description *" />
                            </div>
                        </div>

                    </div>
                    <button type="submit">Create</button>
                </Form>
            </Formik>
        </div>
    )
}