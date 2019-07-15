import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import ClientAction from '../../../actions/ClientAction'
import ClientState from '../../../model/state/client/ClientState';
import ClientForm from '../ClientForm';
import { AppState } from '../../../model/state/AppState';

const ClientAddModal = (props: Props) => 
    <AddModalContainer
        title="New Client"
        action={ ClientAction }
        {...props}>
            <ClientForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.client
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ClientAddModal);