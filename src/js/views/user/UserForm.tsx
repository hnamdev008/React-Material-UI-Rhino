import * as React from 'react';
import { connect } from 'react-redux';
import UserRecord from '../../model/state/user/UserRecord';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import UserAction from '../../actions/UserAction'
import select from '../common/fields/Select';
import autoComplete from '../common/fields/AutoComplete';
import input from '../common/fields/Input';
import textArea from '../common/fields/TextArea';
import editor from '../common/fields/TextEditor';
import Submit from '../common/SubmitButton';
import MenuItem from 'material-ui/MenuItem';
import FormProps from '../common/FormProps';
import { AppState } from '../../model/state/AppState';
import ErrAlert from '../common/ErrorAlert';

const FORM = 'UserForm'

const validate = (values: UserRecord) => {
    const errors = {}
    if(values.password != values['confirm'])
        errors['confirm'] = 'Passwords do not match.'

    return errors;
}

let userForm = reduxForm.reduxForm({
    form: FORM,
    validate: validate
})(
(props: FormProps 
    & { record: UserRecord } ) => {         
        return <form 
            onSubmit={ props.handleSubmit(props.submit) }>
                <ErrAlert errorMsg={ props.error } />

                <div>
                    <Field
                        name="username"
                        label="Username"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="firstName"
                        label="First Name"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="lastName"
                        label="Last Name"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="email"
                        label="Email"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="password"
                        label="Password"
                        type="password"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="confirm"
                        label="Confirm"
                        type="password"
                        component={ input } />
                </div>

                <Submit />
        </form>
});

export default connect(
    (state: AppState) => {    
        return {
            initialValues: state.user.selectedRecord,
            record: state.user.selectedRecord    
        }
    }
)(userForm);

