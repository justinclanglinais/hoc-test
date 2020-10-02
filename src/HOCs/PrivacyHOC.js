import React from 'react';

export default function PrivacyHOC(WrappedComponent) {
    return (
        class PrivacyHOC extends React.Component {
            render () {
                return <h1>Hello!</h1>
            }
        }
    )
}