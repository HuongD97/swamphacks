import React from 'react';
import { withRouter } from 'next/router';

class BankDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            requesterInfo: { ...this.props.router.query }
        }
    }

    render() {
        return (
            <div>
                {this.state.requesterInfo.name}
            </div>
        );
    }
}

export default withRouter(BankDashboard);
