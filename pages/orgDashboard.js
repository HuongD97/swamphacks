import React from 'react';
import { withRouter } from 'next/router';
import Router from 'next/router';
import axios from 'axios';

class OrgDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            account: {},
            providerInfo: { ...this.props.router.query }
        }
    }

    render() {
        return (
            <div>
                {this.state.providerInfo.name}
            </div>
        );
    }
}



export default withRouter(OrgDashboard);
