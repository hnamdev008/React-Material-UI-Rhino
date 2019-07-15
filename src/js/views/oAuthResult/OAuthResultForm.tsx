import * as React from 'react';
import { connect } from 'react-redux';
import OAuthResultRecord from '../../model/state/oAuthResult/OAuthResultRecord';
import OAuthResultWidget from '../../model/state/oAuthResult/OAuthResultWidget';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import OAuthResultAction from '../../actions/OAuthResultAction'
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

const FORM = 'OAuthResultForm'

let oAuthResultForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps 
    & { widget: OAuthResultWidget }
    & { record: OAuthResultRecord } ) => {         
        return <form 
            onSubmit={ props.handleSubmit(props.submit) }>
                <ErrAlert errorMsg={ props.error } />

                <div>
                    <Field
                        name="email"
                        label="Email"
                        disabled={ true }
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="target"
                        label="Target"
                        disabled={ true }
                        data={props.record.target}
                        component={ autoComplete } /> 
                </div>
                <div>
                    <Field
                        name="oAuthEngagement"
                        label="OAuth engagement"
                        disabled={ true }
                        data={props.record.oAuthEngagement}
                        component={ autoComplete } /> 
                </div>
                <div>
                    <Field
                        name="consumer"
                        label="OAuth consumer"
                        disabled={ true }
                        data={props.record.consumer}
                        component={ autoComplete } /> 
                </div>
                <div>
                    <Field
                        name="ip"
                        label="Ip"
                        disabled={ true }
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="timestamp"
                        label="Timestamp"
                        disabled={ true }
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="userAgent"
                        label="User agent"
                        disabled={ true }
                        component={ input } />
                </div>

                <Submit />
        </form>
});

export default connect(
    (state: AppState) => {    
        return {
            initialValues: state.oAuthResult.selectedRecord,
            record: state.oAuthResult.selectedRecord    
        }
    }
)(oAuthResultForm);

