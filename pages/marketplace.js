import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Listing from './components/Listing.js';
import ToggleButton from "@material-ui/lab/ToggleButton";
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withRouter } from 'next/router';
import TextField from "@material-ui/core/TextField";
import Router from 'next/router';

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
        products: [],
        open: false,
        quantity: 0,
        requesterInfo: this.props.router.query
    };

    handleFilter = (event, filterId) => this.setState({filterId});

    handleOpen = () => {
        console.log("open");
        this.setState({ open: true });
    };

    handleClose = () => {
        console.log("close");
        this.setState({open: false});
    };

    quantChange = name => event => {
        this.setState({quantity: event.target.value})
    }

    handleReserve = () => {
        console.log(this.state.quantity);
        console.log("reserve");
        this.setState({open: false})
    };

    async componentDidMount(){
        console.log('this.state.requesterInfo', this.state.requesterInfo);
        console.log("mount");
        const result = await axios.get('/product/getAllAvailable');
        console.log(result);

        const cat = await axios.get('category/all');
        console.log("categories");
        console.log(cat);

        if (this.state.filterId === null)
            this.setState({products: result.data});

        else
            this.setState({products: result.data.filter(product => product.category_id == this.state.filterId)});


        console.log(this.state.products);
    }
    async componentDidUpdate(){
        const result = await axios.get('/product/getAllAvailable');


        if (this.state.filterId === null)
            this.setState({products: result.data});

        else
            this.setState({products: result.data.filter(product => product.category_id == this.state.filterId)});

    }

    async handleSignOut() {
        try {
            const result = await axios.post('/requester/signout');
            if (result.data.success) {
                Router.push('/');
            }
        } catch (e) {
            console.log('Error signing out:', e);
        }
    }

    render() {
        const { classes } = this.props;
        const { filterId } = this.state;
        const { quantity } = this.state;

        const showCard = () => {
            if (this.state.products === [])
                return (
                    <p></p>
                )
            else {
                return (
                    this.state.products.map(value => (
                        <Grid key={value._id} item>
                            <Listing>{value}</Listing>

                            <Button onClick={this.handleOpen} >
                                Listing Details
                            </Button>
                            <Dialog
                                className={classes.heading}
                                open={this.state.open}
                                onClose={this.handleClose}
                                aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Reserve Food</DialogTitle>
                                <DialogContent>
                                    <Listing>{value}</Listing>
                                    <DialogContentText>
                                        Please enter the quantity of this item you'd like to reserve.
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="quant"
                                        label="Quantity"
                                        type="number"
                                        value={this.state.quantity}
                                        onChange={this.quantChange('bollocks')}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={this.handleReserve} color="primary">
                                        Reserve
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                    ))
                )
            }
        }

        return (
            <div className={classes.heading}>
                <h1>Marketplace</h1>
                <Button onClick={this.handleSignOut} variant="outlined" color="primary">Sign Out</Button>
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

                        <Grid container justify="center" spacing={16}>
                            {showCard()}
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

Market.propTypes = {
    classes: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Market));
