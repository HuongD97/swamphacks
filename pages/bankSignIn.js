import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
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

class BankSignIn extends React.Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleLogIn = async event => {
        try {
            const result = await axios.post('/requester/login', {
                email: this.state.email,
                password: this.state.password
            });
            const requesterInfo = result.data.requesterInfo;
            Router.push({pathname: '/marketplace', query: requesterInfo});
        }
        catch (e) {
            console.log('Error signing in:', e);
        }
    };

    render () {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <form className={classes.container}>
                    <Typography gutterBottom={true} variant="h5">
                        Log In
                    </Typography>
                    <div className={classes.spaceBetween}/>
                    <TextField
                        id="username"
                        label="Email Address"
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        variant="outlined"
                    />
                    <div className={classes.spaceBetween}/>
                    <TextField
                        id="password"
                        label="Password"
                        className={classes.textField}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        variant="outlined"
                        type="password"
                    />
                    <div className={classes.spaceBetween}/>
                    <div className={classes.buttonContainer}>
                        <Button size="large" color="primary" onClick={this.handleLogIn}>
                            Log In
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

BankSignIn.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BankSignIn);
