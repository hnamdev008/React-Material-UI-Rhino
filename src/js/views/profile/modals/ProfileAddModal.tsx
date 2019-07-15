import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import ProfileAction from '../../../actions/ProfileAction'
import ProfileState from '../../../model/state/profile/ProfileState';
import ProfileForm from '../ProfileForm';
import { AppState } from '../../../model/state/AppState';

const ProfileAddModal = (props: Props) => 
    <AddModalContainer
        title="New Profile"
        action={ ProfileAction }
        {...props}>
            <ProfileForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.profile
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ProfileAddModal);