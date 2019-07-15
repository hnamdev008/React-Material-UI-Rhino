import * as React from 'react';
import { connect } from 'react-redux';
import EmailServerRecord from '../../model/state/emailServer/EmailServerRecord';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import EmailServerAction from '../../actions/EmailServerAction'
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
import Toggle from 'material-ui/Toggle';
import Props from '../common/fields/CustomProps';
import FieldProps from '../common/fields/FieldProps';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

const renderToggle = (props: Props & FieldProps) => {
    return <Toggle 
        label={props.label}
        toggled={props.input.value ? true: false }
        labelPosition="right"
        onToggle={props.input.onChange}
    />
}

const FORM = 'EmailServerForm'

let emailServerForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps
    & { testRecipientValue: string }  
    & { record: EmailServerRecord } ) => {         
        return <form 
            onSubmit={ props.handleSubmit(props.submit) }>
                <ErrAlert errorMsg={ props.error } />

                <div>
                    <Field
                        name="host"
                        label="Host"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="port"
                        label="Port"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="useTls"
                        label="Use TLS?" 
                        component={ renderToggle } />
                </div>              
                <div>
                    <Field
                        name="login"
                        label="Login"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="password"
                        label="Account Password"
                        component={ input } />
                </div>

                <div>
                    <span>
                        <Field
                        name="testRecipient"
                        label="Test Recipient"
                        component={ input } />
                    </span>
                    <span>
                        <FlatButton 
                            onTouchTap={ 
                                () => props.dispatch(EmailServerAction
                                    .checkEmail(props.record, props.testRecipientValue))
                            }
                            label="Check Server" 
                            disabled={ props.record.testRecipient == null || props.record.testRecipient == undefined }
                            primary={true} />
                    </span>
                    <span>
                        {
                            props.record.checkEmailMessage
                            && <CircularProgress
                                style={{ padding: 10 }} 
                                size={30} 
                                thickness={2} />
                        }
                    </span>
                </div> 

                <Submit />
        </form>
});

const selector = reduxForm.formValueSelector(FORM)

export default connect(
    (state: AppState) => {
        const testRecipientValue = selector(state, 'testRecipient')    
        return {
            testRecipientValue,
            initialValues: state.emailServer.selectedRecord,
            record: state.emailServer.selectedRecord    
        }
    }
)(emailServerForm);

