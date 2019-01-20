import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Listing from './components/Listing.js';
import Typography from '@material-ui/core/Typography';
import ToggleButton from "@material-ui/lab/ToggleButton";

const styles = theme => ({
    root: {
        textAlign: 'center',
        marginTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 10,
        marginLeft: theme.spacing.unit * 10,
        marginRight: theme.spacing.unit * 10,
        boxShadow: '5px 10px',
        border: 'solid'
    },

    rootGrid: {
        textAlign: 'center',
        marginTop: theme.spacing.unit * 5,
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        marginLeft: theme.spacing.unit * 10,
        marginRight: theme.spacing.unit * 10,
        boxShadow: '5px 10px',
        border: 'solid'
    },
    heading: {
        textAlign: 'center'
    },

    listing: {

        height: 140,
        width: 140
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: '0'
    }
})

class Market extends React.Component {
    state = {
        filterId: null,
        products2: []
    }
    handleFilter2 = name => event => {
        console.log("wow");
    }
    handleFilter = (event, filterId) => this.setState({filterId});
    handleChange =  event => {
        console.log('change')
        console.log(this.state.filterId)

    }
    componentDidMount(){
        this.products2
    }
    render() {
        console.log(this.state.filterId);
        const products = [{id:'1', name:'Banana', provider_id:'1', quantity:'30', category_id:'1', imageURL: 'https://cdn.shopify.com/s/files/1/1078/0310/products/fruit-banana-dole-1_1024x1024.jpg?v=1500709708'},
            {id:'2', name:'Banana', provider_id:'1', quantity:'30', category_id:'1', image_url:'banana.com'},
            {id:'3', name:'Celery', provider_id:'1', quantity:'30', category_id:'2', image_url:'banana.com'},
            {id:'4', name:'banana', provider_id:'1', quantity:'30', category_id:'1', image_url:'banana.com'},
            {id:'5', name:'Carrot', provider_id:'1', quantity:'30', category_id:'2', image_url:'banana.com'},
            {id:'6', name:'banana', provider_id:'1', quantity:'30', category_id:'1', image_url:'banana.com'},
            {id:'7', name:'banana', provider_id:'1', quantity:'30', category_id:'1', image_url:'banana.com'},
            {id:'8', name:'banana', provider_id:'1', quantity:'30', category_id:'1', image_url:'banana.com'},
            {id:'9', name:'banana', provider_id:'1', quantity:'30', category_id:'1', image_url:'banana.com'},
            {id:'10', name:'banana', provider_id:'1', quantity:'30', category_id:'1', image_url:'banana.com'},
            {id:'11', name:'banana', provider_id:'1', quantity:'30', category_id:'1', image_url:'banana.com'}];
        const { classes } = this.props;
        const { filterId } = this.state;

        let products2 = [];
        if (this.state.filterId === null)
            products2 = products;
        else
            product2 = products.filter(product => product.category_id === this.state.filterId);

        return (
            <div className={classes.heading}>
                <h1>Marketplace</h1>
                <div className={classes.root}>
                    <h3>Filters</h3>
                    <ToggleButtonGroup value={filterId}
                                       onChange={this.handleFilter}
                                       exclusive
                                       className={classes.buttonContainer}>
                        <ToggleButton value={"1"}>Fruit</ToggleButton>
                        <ToggleButton value={"2"}>Veggies</ToggleButton>
                        <ToggleButton value={"3"}>Protein</ToggleButton>
                    </ToggleButtonGroup>
                    <Grid className={classes.rootGrid}>
                        Filters
                        <Grid container justify="center" spacing={16}>
                            {products2.map(value => (
                                <Grid key={value.id} item>
                                    <Listing>{value}</Listing>

                                    <Button onChange={this.handleChange} >
                                        Listing Details
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

Market.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Market);