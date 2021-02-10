import React, { useEffect, useState } from 'react';
import csvFile from '../../assets/gladiators.csv'
import Papa from 'papaparse';
import classes from './GladiatorList.module.css';
import Gladiator from './Gladiator/Gladiator';
const GladiatorList = (props) => {

    const [gladiators, setGladiators] = useState([]);

    useEffect(() => {
        Papa.parse(csvFile, {
            download: true,
            header: true,
            complete: saveToState
        });
    }, []);

    const saveToState = (input) => {

        const galdiatorList = input.data.map((element) => {
            //Removing spaces from keys of the objects
            Object.keys(element).forEach((key) => {
                element[key.split(' ').join('')] = element[key];
                delete element[key];
            })
            return element;
        })
        setGladiators(galdiatorList);
    };

    const galdiatorList = gladiators.map((gladiator, index) => <Gladiator key={index} {...gladiator} />);
    return (
        <div className={classes.Container}>
            <div className={classes.Heading}>
                <h1>Gladiators List</h1>
            </div>
            <div className={classes.GladiatorContentContainer}>
                <div className={classes.GladiatorContentBody}>
                    {galdiatorList}
                </div>
            </div>

        </div>
    );
};

export default GladiatorList;

