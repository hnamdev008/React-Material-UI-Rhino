import * as React from 'react';
import { connect } from 'react-redux';
import ProfileRecord from '../../model/state/profile/ProfileRecord';
import ProfileWidget from '../../model/state/profile/ProfileWidget';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import ProfileAction from '../../actions/ProfileAction'
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
const moment = require('moment-timezone'); 

//normalize
const timezones = {
    suggestions: moment.tz.names().map(name => ({ text: name, id: name }))
}
const FORM = 'ProfileForm'

let profileForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps 
    & { widget: ProfileWidget }
    & { record: ProfileRecord } ) => {         
        return <form 
            onSubmit={ props.handleSubmit(props.submit) }>
                <ErrAlert errorMsg={ props.error } />

                <div>
                    <Field
                        name="user"
                        label="User"
                        fetch={ FetchAction.getUserSuggestions }
                        component={ autoComplete } /> 
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
            initialValues: state.profile.selectedRecord,
            record: state.profile.selectedRecord    
        }
    }
)(profileForm);

