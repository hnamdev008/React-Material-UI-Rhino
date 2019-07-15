import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import ClientAction from '../../../actions/ClientAction'
import ClientState from '../../../model/state/client/ClientState';
import ClientForm from '../ClientForm';
import { AppState } from '../../../model/state/AppState';

const ClientEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit Client"
        action={ ClientAction }
        {...props}>
            <ClientForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.client
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ClientEditModal);
