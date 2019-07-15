import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import PhishingDomainAction from '../../../actions/PhishingDomainAction'
import PhishingDomainState from '../../../model/state/phishingDomain/PhishingDomainState';
import PhishingDomainForm from '../PhishingDomainForm';
import { AppState } from '../../../model/state/AppState';

const PhishingDomainAddModal = (props: Props) => 
    <AddModalContainer
        title="New Phishing Domain"
        action={ PhishingDomainAction }
        {...props}>
            <PhishingDomainForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.phishingDomain
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(PhishingDomainAddModal);