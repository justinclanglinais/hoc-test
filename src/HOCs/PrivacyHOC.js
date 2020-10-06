import React from 'react';

export default function PrivacyHOC(WrappedComponent) {
    return (
        class PrivacyHOC extends React.Component {
            isLoggedIn = () => {
                return this.props.loggedIn
            }
            render () {
                return this.isLoggedIn() ? <WrappedComponent {...this.props} /> : <h1>You must be logged in</h1>
            }
        }
    )
}