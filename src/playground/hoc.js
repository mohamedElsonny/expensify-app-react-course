// HIGHER ORDER COMPONENT (HOC) - A COMPONENT THAT RENDERS ANOTHER COMPONENET

import React from 'react'
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} /> : <p>Please Login to view the info</p>}
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuth={true} info="This is the details" />, document.getElementById('app'))