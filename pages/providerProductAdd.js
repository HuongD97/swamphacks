import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';

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
    textContainer: {
        width: '100%',
        maxWidth: 500
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit*5,
        paddingLeft: theme.spacing.unit*5
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    spaceBetween: {
        height: theme.spacing.unit * 2
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class ProviderProductAdd extends React.Component {
    state = {
        productName: '',
        quantity: 0,
        categoryId: '',
        imageUrl: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };


    handleSubmit = async event => {
        try {
            this.setState({loading: true});
            const product = {
                name: this.state.productName,
                provider_id: this.state.providerPassword,
                image_url: this.state.imageUrl,
                category_id: this.state.categoryId,
                quantity: this.state.quantity
            };
            const result = await axios.post('/product/create', product);
            const orgData = result.data.orgData;
            //Router.push({pathname: '/orgDashboard', query: orgData});
        } catch (e) {
            this.setState({loading: false, error: e && e.message ? e.message : e});
        }
    };

    render () {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <form className={classes.container}>
                    <Typography gutterBottom={true} variant="h5">
                        Add a Food Item to the Marketplace
                    </Typography>
                    <Typography>
                        Thank you for feeding your community and contributing to a cleaner planet!
                    </Typography>
                    <div className={classes.spaceBetween}/>
                    <TextField
                        id="productName"
                        label="Product Name"
                        className={classes.textField}
                        value={this.state.productName}
                        onChange={this.handleChange('productName')}
                        variant="outlined"
                    />
                    <div className={classes.spaceBetween}/>
                    <TextField
                        id="quantity"
                        label="Quantity"
                        className={classes.textField}
                        value={this.state.quantity}
                        onChange={this.handleChange('quantity')}
                        variant="outlined"
                    />                 
                    <div className={classes.spaceBetween}/>
                    <Select
                        className={classes.select}
                        value={this.state.categoryId}>
                    </Select>
                    <div className={classes.spaceBetween}/>
                    <TextField
                        id="imageUrl"
                        label="Image URL"
                        className={classes.textField}
                        value={this.state.imageUrl}
                        onChange={this.handleChange('imageUrl')}
                        variant="outlined"
                    />
                    <div className={classes.buttonContainer}>
                        <Button size="large" color="primary">
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

ProviderProductAdd.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProviderProductAdd);