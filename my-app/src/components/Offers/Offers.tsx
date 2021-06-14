import { Component } from 'react';
import _ from "lodash";
import { Offer } from '../../domain/Offer'
import { Technology } from '../../domain/Technology'
import { RootState } from '../../app/store'
import { connect } from "react-redux";
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import client from "../../api";

export default function OfferListHook() {
    const [offerList, setOfferList] = useState([{
        id: 0,
        title: '',
        company: '',
        area: '',
        activity: false,
        freeInput: false,
        finalCustomer: false,
        gondolaHead: false,
        function: '',
        technologiesIds: [],
        contract: '',
        location: '',
        shortDescription: '',
        description: ''
    }]);

    const [technologyList, setTechnologyList] = useState([{ id: 0, name: '' }]);
    //Fix the infinite loop problem with the useEffect() :
    const [value, setValue] = useState('');

    useEffect(() => {
        getOffers();
        getTechnologies();
    }, [value]);

    function getOffers() {
        client.get('/Offers').then((response) => {
            setOfferList(response.data);
        }).catch((error) => {
            console.log(error)
        });
    }

    function getTechnologies() {
        client.get('/Technologies').then((response) => {
            setTechnologyList(response.data);
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

    return (
        <div>
            <Table striped bordered hover responsive size="sm">
                <thead>
                    <tr>
                        <th className='centerText' style={{ width: 50 }}>Id</th>
                        <th className='centerText'>Title</th>
                        <th className='centerText'>Company</th>
                        <th className='centerText'>Area</th>
                        <th className='centerText'>Activity</th>
                        <th className='centerText'>Free input</th>
                        <th className='centerText'>Final customer</th>
                        <th className='centerText'>Gondola head</th>
                        <th className='centerText'>Function</th>
                        <th className='centerText'>Technologies</th>
                        <th className='centerText'>Contract</th>
                        <th className='centerText'>Location</th>
                        <th className='centerText'>Short description</th>
                        <th className='centerText'>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {offerList.map((offer, key) =>
                        <tr>
                            <td>
                                {offer.id}
                            </td>
                            <td>
                                {offer.title}
                            </td>
                            <td>
                                {offer.company}
                            </td>
                            <td>
                                {offer.area}
                            </td>
                            <td>
                                {offer.activity}
                            </td>
                            <td>
                                {offer.freeInput}
                            </td>
                            <td>
                                {offer.finalCustomer}
                            </td>
                            <td>
                                {offer.gondolaHead}
                            </td>
                            <td>
                                {offer.function}
                            </td>
                            <td>
                                {getTechnologiesNames(offer.technologiesIds).map(x => x + ' ')}
                            </td>
                            <td>
                                {offer.contract}
                            </td>
                            <td>
                                {offer.location}
                            </td>
                            <td>
                                {offer.shortDescription}
                            </td>
                            <td>
                                {offer.description}
                            </td>
                        </tr>)}
                </tbody>
            </Table>
        </div>
    )
}