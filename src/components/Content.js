import React from 'react';
import PrivacyHOC from '../HOCs/PrivacyHOC.js'
import LoaderHOC from '../HOCs/LoaderHOC.js'

class Content extends React.Component {
    render () {
        return (
            <h1>Super Secret Protected Information</h1>
        )
    }
}

export default PrivacyHOC(LoaderHOC(Content));