import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import EmailServerAction from '../../../actions/EmailServerAction'
import EmailServerState from '../../../model/state/emailServer/EmailServerState';
import EmailServerForm from '../EmailServerForm';
import { AppState } from '../../../model/state/AppState';

const EmailServerEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit Email Server"
        action={ EmailServerAction }
        {...props}>
            <EmailServerForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.emailServer
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EmailServerEditModal);
