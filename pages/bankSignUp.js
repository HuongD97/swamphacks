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

class RequesterSignUp extends React.Component {
    state = {
        requesterName: '',
        requesterAddress: '',
        requesterEmail: '',
        requesterPassword: '',
        requesterPhone: ''
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
                        Food Bank Sign Up
                    </Typography>
                    <Typography>
                        You rock for working so hard to provide for people who need it.
                    </Typography>
                    <div className={classes.spaceBetween}/>
                    <TextField
                        id="bankName"
                        label="Name"
                        className={classes.textField}
                        value={this.state.requesterName}
                        onChange={this.handleChange('requesterName')}
                        variant="outlined"
                    />
                    <div className={classes.spaceBetween}/>
                    <TextField
                        id="bankAddress"
                        label="Food Bank Location"
                        className={classes.textField}
                        value={this.state.requesterAddress}
                        onChange={this.handleChange('requesterAddress')}
                        variant="outlined"
                    />
                    <div className={classes.spaceBetween}/>
                    <TextField
                        id="requesterEmail"
                        label="Email Address"
                        className={classes.textField}
                        value={this.state.requesterEmail}
                        onChange={this.handleChange('requesterEmail')}
                        variant="outlined"
                    />
                    <div className={classes.spaceBetween}/>
                    <TextField
                        id="requesterPhone"
                        label="Phone Number"
                        className={classes.textField}
                        value={this.state.requesterPhone}
                        onChange={this.handleChange('requesterPhone')}
                        variant={"outlined"}
                    />
                    <div className={classes.spaceBetween} />
                    <TextField
                        id="requesterPassword"
                        label="Password"
                        className={classes.textField}
                        value={this.state.requesterPassword}
                        onChange={this.handleChange('requesterPassword')}
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

RequesterSignUp.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RequesterSignUp);