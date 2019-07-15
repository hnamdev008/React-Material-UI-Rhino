import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import ProfileAction from '../../../actions/ProfileAction'
import ProfileState from '../../../model/state/profile/ProfileState';
import ProfileForm from '../ProfileForm';
import { AppState } from '../../../model/state/AppState';

const ProfileEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit Profile"
        action={ ProfileAction }
        {...props}>
            <ProfileForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.profile
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ProfileEditModal);
