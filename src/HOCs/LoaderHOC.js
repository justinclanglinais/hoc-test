import React from 'react';

export default function LoaderHOC(WrappedComponent) {
    return (
        class LoaderHOC extends React.Component {
            isLoaded = () => {
                return this.props.loaded
            }
            render () {
                return this.isLoaded() ? <WrappedComponent /> : <h1>Content loading...</h1>
            }
        }
    )
}