import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import EmailServerAction from '../../../actions/EmailServerAction'
import EmailServerState from '../../../model/state/emailServer/EmailServerState';
import EmailServerForm from '../EmailServerForm';
import { AppState } from '../../../model/state/AppState';

const EmailServerAddModal = (props: Props) => 
    <AddModalContainer
        title="New Email Server"
        action={ EmailServerAction }
        {...props}>
            <EmailServerForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.emailServer
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EmailServerAddModal);