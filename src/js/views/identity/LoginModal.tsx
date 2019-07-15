import * as React from 'react';
import { Modal } from '../components/common/Modal2';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import { Identity } from '../../security/Identity';
import { Control } from '../components/common/Controls';

const loginModal = (props: { isOpen: boolean }) => {
    return (
         <Modal 
            title="Login"
            visible={ props.isOpen }>
                <Control>
                    <label htmlFor="login-submit-form">LOGIN</label>
                </Control>
                <LoginForm />
        </Modal>        
    );
}

const mapStateToProps = (app: AppState): { isOpen: boolean } => ({
    isOpen: app.login.isOpen
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch: dispatch
    })
)(loginModal);

