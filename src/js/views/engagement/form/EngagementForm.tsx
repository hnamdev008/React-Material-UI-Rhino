import * as React from 'react';
import { connect } from 'react-redux';
import EngagementRecord from '../../../model/state/engagement/EngagementRecord';
import TargetListRecord from '../../../model/state/targetList/TargetListRecord';
import Ref from '../../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
const FieldArray = reduxForm.FieldArray;
import autoComplete from '../../common/fields/AutoComplete'
import TextField from 'material-ui/TextField'
import EngagementAction from '../../../actions/EngagementAction'
import FetchAction from '../../../actions/FetchAction'; 
import { AppState } from '../../../model/state/AppState';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import ErrAlert from '../../common/ErrorAlert';
import SubmitButton from '../../common/SubmitButton';
import FlatButton from 'material-ui/FlatButton';
import Play from 'material-ui/svg-icons/av/play-arrow';
import Stop from 'material-ui/svg-icons/av/stop';
import Checkbox from 'material-ui/Checkbox'
import { ModeType } from '../../../model/state/CrudState';
// import FormProps from '../../common/FormProps';

interface Props {
    data: Ref
    label: string
    asyncSrc: Function
    defaultValue: string
}

const renderInput = (props: Props & FieldProps) => {
    return <TextField
        hintText={ props.label }
        floatingLabelText={ props.label }
        errorText={
            props.meta.touched && props.meta.error
        }
        {...props.input}
    />
}

const renderTextArea = (props: Props & FieldProps) => {
    return <TextField
        hintText={ props.label }
        floatingLabelText={ props.label }
        errorText={
            props.meta.touched && props.meta.error
        }
        {...props.input}
        multiLine={true}
        rows={6}
    />
}

// label={props.label}
// checked={props.input.value ? true: false }
// onCheck={props.input.onChange}
const RenderCheckbox = (props: Props & FieldProps) => {
    return <Checkbox {...props}

    />
}

interface FieldProps {
  input: {
    name: string,
    value: string,
    onChange(value: string): void;
  },
  meta: {
    active: boolean,
    asyncValidating: boolean,
    autofilled: boolean,
    dirty: boolean,
    error: string,
    warning: string,
    invalid: boolean,
    pristine: boolean,
    submitting: boolean,
    touched: boolean,
    valid: boolean,
    visited: boolean,
    dispatch: Function
  },
  name: string
  children: any
}

const FORM = 'EngagementFormAdd'

const engagementForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps & {record: EngagementRecord } & { mode: ModeType }) => { 
    const available = () => {
         return FetchAction.getTargetListSuggestionsForClient(props['dispatch'], props.record.clientId)
                .then(results => {
                    return results.map(result => {
                        return <RenderCheckbox label={result.text} defaultChecked={false} />
                    });
                })
    }

    const start = () => {
        //props['dispatch'](EngagementAction.togglePreview(props.record));
        props['dispatch'](EngagementAction.confirmStart(props.record));
    }

    const stop = () => {
       props['dispatch'](EngagementAction.stop(props.record.id));
    }

    return <form 
        onSubmit={ props.handleSubmit(props.submit) }>
            <ErrAlert errorMsg={ props.error } />

            { 
                props.mode !== 'add'
                && <div>
                    <FlatButton
                        label="Start Engagement"
                        onClick={start}
                        disabled={props.record.state === 4}
                        icon={<Play color="green"/>}
                        />
                    <FlatButton
                        label="Stop Engagement"
                        onClick={stop}
                        disabled={props.record.state === 0}
                        icon={<Stop color="red"/>}
                        />
                </div>
            }

            <div>
                <Field
                    name="campaign"
                    label="Campaign"
                    fetch={ FetchAction.getCampaignSuggestions }
                    component={ autoComplete } />
            </div>
            <div>
                <Field
                    name="name"
                    label="Title"
                    component={ renderInput } />
            </div>
            <div>
                <Field
                    name="description"
                    label="Description"
                    component={ renderTextArea } />
            </div>
            <div>
                http://
                <Field
                    name="phishingDomain"
                    label="Phishing Domain"
                    fetch={ FetchAction.getPhishingDomainSuggestions }
                    component={ autoComplete } />
                /
                <Field
                    name="path"
                    label="Path"
                    component={ renderInput } />
            </div>
            <div>
                <Field
                    name="schedule"
                    label="Schedule"
                    fetch={ FetchAction.getScheduleSuggestions }
                    component={ autoComplete } />
            </div>
            <div>
                <Field
                    name="emailServer"
                    label="Send Using"
                    fetch={ FetchAction.getEmailServerSuggestions }
                    component={ autoComplete } />
            </div>
            <div>
                <Field
                    name="emailTemplate"
                    label="Email template"
                    fetch={ FetchAction.getEmailTemplateSuggestions }
                    component={ autoComplete } />
            </div>
            <div>
                <Field
                    name="landingPage"
                    label="Landing page"
                    fetch={ FetchAction.getLandingPageSuggestions }
                    component={ autoComplete } />
            </div>
            <div>
                <Field
                    name="redirectPage"
                    label="Redirect page"
                    fetch={ FetchAction.getRedirectPageSuggestions }
                    component={ autoComplete } />
            </div>
            
            <label>Target Lists</label>
            { available }
            {/*  
            <FieldArray name="availableTargetLists" component={lists =>
                (
                    <div>
                    {
                        lists.fields.map((list: TargetListRecord, listIdx) => {
                            return <Field
                                name={ list }
                                label={ props.record.targetLists[listIdx].text } 
                                component={ renderCheckbox } />
                        })
                    }
                    </div>
                )
            */}
            }
            
            <SubmitButton submitId="engagement-submit-form" />
    </form>
});



// const selector = reduxForm.formValueSelector(FORM);

export default connect(
    (state: AppState) => {
        // const targetListsValue = state.engagement.selectedRecord.targetLists.map(list => {

        // })

        // const targetListsValue = selector(state, 'configuration')    
        return {
            initialValues: state.engagement.selectedRecord,
            record: state.engagement.selectedRecord    
        }
    }
)(engagementForm);

interface FormProps {
    error: string;
    handleSubmit(fn: () => void): void
    submit(): void
}

