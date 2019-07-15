import * as React from 'react';
import { connect } from 'react-redux';
import OAuthEngagementRecord from '../../model/state/oAuthEngagement/OAuthEngagementRecord';
import OAuthEngagementWidget from '../../model/state/oAuthEngagement/OAuthEngagementWidget';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import FetchAction from '../../actions/FetchAction';
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

const oAuthEngagementForm = reduxForm.reduxForm({
    form: 'oAuthEngagementForm'
})(
(props: FormProps & {record: OAuthEngagementRecord }) => { 
    return <form 
        onSubmit={ props.handleSubmit(props.submit) }>
            <ErrAlert errorMsg={ props.error } />

            <div>
                <Field
                    name="campaign"
                    label="Campaign"
                    data={props.record.campaign}
                    asyncSrc={ FetchAction.getCampaignSuggestions }
                    component={ autoComplete } />
            </div>
            <div>
                <Field
                    name="name"
                    label="Title"
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
                    name="oAuthConsumer"
                    label="OAuth consumer"
                    data={props.record.oAuthConsumer}
                    asyncSrc={ FetchAction.getOAuthConsumerSuggestions }
                    component={ autoComplete } />
            </div>
            <div>
                <Field
                    name="schedule"
                    label="Schedule"
                    data={props.record.schedule}
                    asyncSrc={ FetchAction.getScheduleSuggestions }
                    component={ autoComplete } />
            </div>
            <div>
                <Field
                    name="emailServer"
                    label="Send Using"
                    data={props.record.emailServer}
                    asyncSrc={ FetchAction.getEmailServerSuggestions }
                    component={ autoComplete } />
            </div>
            <div>
                <Field
                    name="emailTemplate"
                    label="Email template"
                    data={props.record.emailTemplate}
                    asyncSrc={ FetchAction.getEmailTemplateSuggestions }
                    component={ autoComplete } />
            </div>

            <Submit />
    </form>
});

//const selector = reduxForm.formValueSelector(FORM);

export default connect(
    (state: AppState) => {    
        return {
            initialValues: state.oAuthEngagement.selectedRecord,
            record: state.oAuthEngagement.selectedRecord    
        }
    }
)(oAuthEngagementForm);

