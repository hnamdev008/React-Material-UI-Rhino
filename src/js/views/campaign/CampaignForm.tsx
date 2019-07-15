import * as React from 'react';
import { connect } from 'react-redux';
import CampaignRecord from '../../model/state/campaign/CampaignRecord';
import CampaignWidget from '../../model/state/campaign/CampaignWidget';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import CampaignAction from '../../actions/CampaignAction'
import FetchAction from '../../actions/FetchAction'
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

const FORM = 'CampaignForm'

let campaignForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps 
    & { widget: CampaignWidget }
    & { record: CampaignRecord } ) => {         
        return <form 
            onSubmit={ props.handleSubmit(props.submit) }>
                <ErrAlert errorMsg={ props.error } />

                <div>
                    <Field
                        name="client"
                        label="Clients"
                        fetch={ FetchAction.getClientSuggestions }
                        component={ autoComplete } /> 
                </div>
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

                <Submit />
        </form>
});

export default connect(
    (state: AppState) => {    
        return {
            initialValues: state.campaign.selectedRecord,
            record: state.campaign.selectedRecord    
        }
    }
)(campaignForm);

