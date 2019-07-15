import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import UserAction from '../../../actions/UserAction'
import UserState from '../../../model/state/user/UserState';
import UserForm from '../UserForm';
import { AppState } from '../../../model/state/AppState';

const UserEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit User"
        action={ UserAction }
        {...props}>
            <UserForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.user
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(UserEditModal);
