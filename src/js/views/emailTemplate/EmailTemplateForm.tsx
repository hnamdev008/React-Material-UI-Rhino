import * as React from 'react';
import { connect } from 'react-redux';
import EmailTemplateRecord from '../../model/state/emailTemplate/EmailTemplateRecord';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import EmailTemplateAction from '../../actions/EmailTemplateAction'
import select from '../common/fields/Select';
import autoComplete from '../common/fields/AutoComplete';
import input from '../common/fields/Input';
import editor from '../common/fields/TextEditor2';
import Submit from '../common/SubmitButton';
import MenuItem from 'material-ui/MenuItem';
import FormProps from '../common/FormProps';
import { AppState } from '../../model/state/AppState';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ErrAlert from '../common/ErrorAlert';
import FetchAction from '../../actions/FetchAction';
import FlatButton from 'material-ui/FlatButton';
import Check from 'material-ui/svg-icons/navigation/check';

const FORM = 'EmailTemplateFormAdd'

let emailTemplateForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps 
    & { targetListValue: Ref }
    & { record: EmailTemplateRecord } ) => {
        return <form 
            onSubmit={ props.handleSubmit(props.submit) }>
                <ErrAlert errorMsg={ props.error } />

                <div> 
                    <Field
                        name="name"
                        label="Template Name"
                        component={ input }  />
                </div>

                <div> 
                    <Field
                        name="fromHeader"
                        label="From Header"
                        component={ input }  />
                </div>

                <div> 
                    <Field
                        name="subjectHeader"
                        label="Subject Header"
                        component={ input }  />
                </div>

                <div>
                    <span>
                        <Field
                            name="targetList"
                            label="Target Lists"
                            fetch={ FetchAction.getTargetListSuggestions }
                            component={ autoComplete } />
                    </span>
                    <span>
                        <FlatButton 
                            onTouchTap={ 
                                () => { return props['dispatch'](EmailTemplateAction
                                    .checkShortcodes(props.record.template, props.targetListValue.id))
                                }
                            }
                            label="Shortcodes"
                            icon={ <Check /> }
                            disabled={ props.targetListValue == null || props.targetListValue == undefined } 
                            primary={true} />
                    </span>
                </div> 

                <div>
                    {
                        props.record.shortcodeErrors &&
                        props.record.shortcodeErrors.length == 0
                        ?
                        <span style={ { color: "green" } }>No invalid shortcodes found.</span>
                        :
                        <span style={ { color: "red" } }>{ props.record.shortcodeErrors }</span>
                        
                    }
                </div>

                <div className="text-area">
                    <Field
                        fetch={ () => Promise.resolve(props.record.template) }
                        name="template"
                        label="Template"
                        component={ editor } />
                </div>

                <Submit />
        </form>
});

const selector = reduxForm.formValueSelector(FORM)
//http://redux-form.com/6.0.0-alpha.11/examples/selectingFormValues/
export default connect(
  (state: AppState) => {
    const targetListValue = selector(state, 'targetList')
    return {
      targetListValue,
      initialValues: state.emailTemplate.selectedRecord,
      record: state.emailTemplate.selectedRecord,
      widget: state.emailTemplate.widgetState
    }
  }
)(emailTemplateForm)

