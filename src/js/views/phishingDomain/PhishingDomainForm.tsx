import * as React from 'react';
import { connect } from 'react-redux';
import PhishingDomainRecord from '../../model/state/phishingDomain/PhishingDomainRecord';
import PhishingDomainWidget from '../../model/state/phishingDomain/PhishingDomainWidget';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import PhishingDomainAction from '../../actions/PhishingDomainAction'
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

const FORM = 'PhishingDomainForm'

let phishingDomainForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps 
    & { widget: PhishingDomainWidget }
    & { record: PhishingDomainRecord } ) => {         
        return <form 
            onSubmit={ props.handleSubmit(props.submit) }>
                <ErrAlert errorMsg={ props.error } />

                <div>
                    <Field
                        name="domainName"
                        label="Domain name"
                        component={ input } />
                </div>
            
                <Submit />
        </form>
});

export default connect(
    (state: AppState) => {    
        return {
            initialValues: state.phishingDomain.selectedRecord,
            record: state.phishingDomain.selectedRecord    
        }
    }
)(phishingDomainForm);

