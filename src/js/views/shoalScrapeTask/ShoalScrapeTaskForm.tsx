import * as React from 'react';
import { connect } from 'react-redux';
import ShoalScrapeTaskRecord from '../../model/state/shoalScrapeTask/ShoalScrapeTaskRecord';
import ShoalScrapeTaskWidget from '../../model/state/shoalScrapeTask/ShoalScrapeTaskWidget';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import ShoalScrapeTaskAction from '../../actions/ShoalScrapeTaskAction'
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
import FetchAction from '../../actions/FetchAction'
import ErrAlert from '../common/ErrorAlert';

const FORM = 'ShoalScrapeTaskForm'

let shoalScrapeTaskForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps 
    & { widget: ShoalScrapeTaskWidget }
    & { record: ShoalScrapeTaskRecord } ) => {         
        return <form 
            onSubmit={ props.handleSubmit(props.submit) }>
                <ErrAlert errorMsg={ props.error } />

                <div>
                    <Field
                        name="shoalScrapeCreds"
                        label="Credentials"
                        asyncSrc={ FetchAction.getShoalScrapeCredSuggestions }
                        component={ autoComplete } /> 
                </div>
                <div>
                    <Field
                        name="company"
                        label="Company"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="domain"
                        label="Domain"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="lastStartedAt"
                        label="Last started at"
                        disabled={ true }
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="path"
                        label="Path"
                        disabled={ true }
                        component={ input } />
                </div>

                <Submit />
        </form>
});

export default connect(
    (state: AppState) => {    
        return {
            initialValues: state.shoalScrapeTask.selectedRecord,
            record: state.shoalScrapeTask.selectedRecord    
        }
    }
)(shoalScrapeTaskForm);

