import React from 'react';
import Card from '@material-ui/core/Card';

const Listing = (props) => {

    return(
        <Card>
            <h1>{props.children.name}</h1>
            <img src={props.children.imageURL} width="200px" height="200px"/>
            <div>Quantity: {props.children.quantity}</div>
            <div>{props.children.provider_id}</div>
        </Card>
    )
}

export default Listing