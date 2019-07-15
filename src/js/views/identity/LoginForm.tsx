import * as React from 'react';
import { connect } from 'react-redux';
import EmailTemplateRecord from '../../model/state/emailTemplate/EmailTemplateRecord';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import LoginAction from '../../actions/LoginAction'
import select from '../common/fields/Select';
import autoComplete from '../common/fields/AutoComplete';
import input from '../common/fields/Input';
import editor from '../common/fields/TextEditor2';
import Submit from '../common/SubmitButton';
import MenuItem from 'material-ui/MenuItem';
import FormProps from '../common/FormProps';
import { AppState } from '../../model/state/AppState';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ErrAlert from '../common/ErrorAlert';
import validate from '../../validation/client/LoginFormClientValidator';

const FORM = 'LoginForm'

const loginForm = reduxForm.reduxForm({
    form: FORM,
    validate: validate
})(
(props: FormProps) => {       
        return <form 
            onSubmit={ props.handleSubmit(values => LoginAction.submit(props.dispatch, values)) }>
                <ErrAlert errorMsg={ props.error } />

                <div> 
                    <Field
                        name="host"
                        label="Host"
                        component={ input }  />
                </div>

                <div> 
                    <Field
                        name="port"
                        label="Port"
                        component={ input }  />
                </div>

                <div> 
                    <Field
                        name="username"
                        label="Username"
                        component={ input }  />
                </div>

                <div> 
                    <Field
                        name="password"
                        label="Password"
                        type="password"
                        component={ input }  />
                </div>

                <Submit submitId="login-submit-form" />
        </form>
});

export default loginForm;

