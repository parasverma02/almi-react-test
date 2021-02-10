import React, { Component } from 'react';
import csvFile from '../../assets/gladiators.csv'
import Papa from 'papaparse';
import classes from './GladiatorList.module.css';
import Gladiator from './Gladiator/Gladiator';
class gladiatorList extends Component {

    state = {
        gladiators: []
    };

    componentDidMount = () => {
        Papa.parse(csvFile, {
            download: true,
            header: true,
            complete: this.saveToState
        });
    };
    saveToState = (input) => {
        
        const galdiatorList = input.data.map((element) => {
            //Removing spaces from keys of the objects
            Object.keys(element).forEach((key) => {
                element[key.split(' ').join('')] = element[key];
                delete element[key];
            })
            return element;
        })
        this.setState({gladiators: galdiatorList});
    };



    render() {
       
        const galdiatorList = this.state.gladiators.map((gladiator, index) => <Gladiator key={index} { ... gladiator} />);
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
        )
    }

};


export default gladiatorList;

