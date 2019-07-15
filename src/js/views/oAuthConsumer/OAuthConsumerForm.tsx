import * as React from 'react';
import { connect } from 'react-redux';
import OAuthConsumerRecord from '../../model/state/oAuthConsumer/OAuthConsumerRecord';
import OAuthConsumerWidget from '../../model/state/oAuthConsumer/OAuthConsumerWidget';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import OAuthConsumerAction from '../../actions/OAuthConsumerAction'
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

const FORM = 'OAuthConsumerForm'

let OAuthConsumerForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps 
    & { widget: OAuthConsumerWidget }
    & { record: OAuthConsumerRecord } ) => {         
        return <form 
            onSubmit={ props.handleSubmit(props.submit) }>
                <ErrAlert errorMsg={ props.error } />

                <div>
                    <Field
                        name="name"
                        label="Name"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="description"
                        label="Description"
                        component={ textArea } />
                </div>
                <div>
                    <Field
                        name="clientId"
                        label="Client id"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="clientSecret"
                        label="Client secret"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="scope"
                        label="Scope"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="callbackUrl"
                        label="Callback URL"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="bounceUrl"
                        label="Bounce URL"
                        component={ input } />
                </div>

                <Submit />
        </form>
});

export default connect(
    (state: AppState) => {    
        return {
            initialValues: state.oAuthConsumer.selectedRecord,
            record: state.oAuthConsumer.selectedRecord    
        }
    }
)(OAuthConsumerForm);

