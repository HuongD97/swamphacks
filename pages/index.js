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

class Index extends React.Component {
    state = {
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
                    <Typography gutterBottom={true} variant="h2">
                        Hack Away Hunger
                    </Typography>
                    <Typography variant="h5">
                        Supermarkets throw away 43 billion pounds of food every year. That's 10% of total US retail food supply.
                        Up to 50% of produce is thrown away while still edible. Blemished produce, dented cans, outdated promotional
                        products, and food past its "Best By" date are all nutritious and safe-to-eat foods which are routinely tossed
                        into landfills. Shelf overstocking and oversized food cases mean that stores purposefully order more food than
                        they can sell. Meanwhile, one in seven American families is food insecure. This is a problem.
                    </Typography>
                    <div className={classes.spaceBetween}/>
                    <Typography variant="h5">
                        Hack Away Hunger is an online marketplace for overstocked foodstuffs, connecting food banks and soup kitchens with
                        high-quality and nutritious food. Food should fill tummies, not dumpsters. For food stores and farms, donations reduce
                        the cost of waste management, since fewer dumpsters of food need to be hauled away. And for food pantries, these delicious 
                        foods can improve the livelihoods of those they serve. Hack Away Hunger makes the donation of food efficient and easy for both.
                    </Typography>
                    <div className={classes.spaceBetween}/>
                    <div className={classes.buttonContainer}>
                        <Button fullWidth={true} variant="outlined" size="large" color="primary">
                            Sign up
                        </Button>
                        <div className={classes.spaceBetween}/>
                        <Button fullWidth={true} variant="outlined" size="large" color="secondary">
                            Log in
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);