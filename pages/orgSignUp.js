import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        textAlign: 'center',
        marginTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 5,
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

class OrganizationSignUp extends React.Component {
    state = {
        providerName: '',
        providerAddress: '',
        providerEmail: '',
        providerPassword: '',
        providerPhone: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render () {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <form className={classes.container}>
                    <Typography gutterBottom={true} variant="h5">
                        Food Donator Sign Up
                    </Typography>
                    <Typography>
                        Thank you for your enthusiasm in donating food. Your generous donation
                        will be used to stock food banks and help them better serve Americans
                        in need of nutritious meals. After signing up for an account, you will be able to
                        list items that you want to donate. Food banks within our network will be able to
                        see listed items and reserve them according to their needs. Once reserved, food banks'
                        staff will be able to pick up items from your organization address. Thank you!
                    </Typography>
                    <div className={classes.spaceBetween}/>
                    <TextField
                        id="orgName"
                        label="Name"
                        className={classes.textField}
                        value={this.state.providerName}
                        onChange={this.handleChange('providerName')}
                        variant="outlined"
                    />
                    <div className={classes.spaceBetween}/>
                    <TextField
                        id="orgAddress"
                        label="Pickup Address"
                        className={classes.textField}
                        value={this.state.providerAddress}
                        onChange={this.handleChange('providerAddress')}
                        variant="outlined"
                    />
                    <div className={classes.spaceBetween}/>
                    <TextField
                        id="orgEmail"
                        label="Email Address"
                        className={classes.textField}
                        value={this.state.providerEmail}
                        onChange={this.handleChange('providerEmail')}
                        variant="outlined"
                    />
                    <div className={classes.spaceBetween}/>
                    <TextField
                        id="orgPhone"
                        label="Phone Number"
                        className={classes.textField}
                        value={this.state.providerPhone}
                        onChange={this.handleChange('providerPhone')}
                        variant="outlined"
                    />
                    <div className={classes.spaceBetween}/>
                    <TextField
                        id="password"
                        label="Password"
                        className={classes.textField}
                        value={this.state.providerPassword}
                        onChange={this.handleChange('providerPassword')}
                        variant="outlined"
                    />
                    <div className={classes.spaceBetween}/>
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

OrganizationSignUp.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OrganizationSignUp);
