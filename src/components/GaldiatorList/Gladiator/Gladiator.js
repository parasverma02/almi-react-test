import React from 'react';
import classes from './Gladiator.module.css';

const gladiator = props => {

    const gladiatorDetails = (
        <div className={classes.Gladiator}>
            <div className={classes.Name}>
                <h1>{props.gladiatorname}</h1>
            </div>
            <div className={classes.Details}>
                <p>Real Name: <span>{props.realname}</span></p>
                <p>First Year: <span>{props.firstyear}</span></p>
                <p>Last Year: <span>{props.lastyear}</span></p>
            </div>

        </div>
    )
    return (
        gladiatorDetails
    )
}

export default gladiator;