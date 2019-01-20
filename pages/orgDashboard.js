import { withRouter } from 'next/router';

const OrgDashboard = (props) => {
    console.log('router', props.router);
    return (
        <div>whoot!</div>
    );
};



export default withRouter(OrgDashboard);
