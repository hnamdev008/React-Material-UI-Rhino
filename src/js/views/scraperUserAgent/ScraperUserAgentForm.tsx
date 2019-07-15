import * as React from 'react';
import { connect } from 'react-redux';
import ScraperUserAgentRecord from '../../model/state/scraperUserAgent/ScraperUserAgentRecord';
import ScraperUserAgentWidget from '../../model/state/scraperUserAgent/ScraperUserAgentWidget';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import ScraperUserAgentAction from '../../actions/ScraperUserAgentAction'
import select from '../common/fields/Select';
import autoComplete from '../common/fields/AutoComplete';
import input from '../common/fields/Input';
import textArea from '../common/fields/TextArea';
import editor from '../common/fields/TextEditor';
import Submit from '../common/SubmitButton';
import MenuItem from 'material-ui/MenuItem';
import FormProps from '../common/FormProps';
import { AppState } from '../../model/state/AppState';
import IconButton from 'material-ui/IconButton';
import ErrAlert from '../common/ErrorAlert';

const FORM = 'ScraperUserAgentForm'

let scraperUserAgentForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps 
    & { widget: ScraperUserAgentWidget }
    & { record: ScraperUserAgentRecord } ) => {         
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
                        name="userAgentData"
                        label="User agent data"
                        component={ textArea } />
                </div>

                <Submit submitId="userForm" />
        </form>
});

export default connect(
    (state: AppState) => {    
        return {
            initialValues: state.scraperUserAgent.selectedRecord,
            record: state.scraperUserAgent.selectedRecord    
        }
    }
)(scraperUserAgentForm);

