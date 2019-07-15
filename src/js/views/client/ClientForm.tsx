import * as React from 'react';
import { connect } from 'react-redux';
import ClientRecord from '../../model/state/client/ClientRecord';
import ClientWidget from '../../model/state/client/ClientWidget';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import ClientAction from '../../actions/ClientAction'
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
const moment = require('moment-timezone'); 

//normalize
const timezones = {
    suggestions: moment.tz.names().map(name => ({ text: name, id: name }))
}

const FORM = 'ClientForm'

let clientForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps 
    & { widget: ClientWidget }
    & { record: ClientRecord } ) => {         
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
                        name="url"
                        label="URL"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="timezone"
                        label="Default Timezone"
                        fetch={ () => Promise.resolve(timezones.suggestions) }
                        component={ autoComplete } /> 
                </div>

                <Submit />
        </form>
});

export default connect(
    (state: AppState) => {    
        return {
            initialValues: state.client.selectedRecord,
            record: state.client.selectedRecord    
        }
    }
)(clientForm);

