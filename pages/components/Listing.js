import React from 'react';
import Card from '@material-ui/core/Card';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Listing = (props) => {
    const [item, setItem] = useState(props.item);
    const [provider, setProvider] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios.post('/provider/getById', {
            id: item.provider_id
        }).then((result) => {
            setProvider(result.data);
            setShow(true);
        }).catch((error) => {
            console.log('Error:', error);
        });
    }, [item]);

    useEffect(() => {
        setItem(props.item);
    }, [item]);

    const renderListing = () => {
        if (show) {
            return (
                <Card>
                    <h1>{item.name}</h1>
                    <img src={item.image_url} width="200px" height="200px"/>
                    <div>Quantity: {item.quantity}</div>
                    <div>{provider.name}</div>
                </Card>
            );
        } else {
            return null;
        }
    };


    return (
        <div>
            {renderListing()}
        </div>
    );
}

export default Listing;
