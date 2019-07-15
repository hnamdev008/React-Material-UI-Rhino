import * as React from 'react';
import autoComplete from '../common/fields/AutoComplete';
import Submit from '../common/SubmitButton';
import input from '../common/fields/Input';
import FormProps from '../common/FormProps';
import ScheduleRecord from '../../model/state/schedule/ScheduleRecord';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import textArea from '../common/fields/TextArea';
import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton';
import { connect } from 'react-redux';
import TimePicker from 'material-ui/TimePicker';
import { AppState } from '../../model/state/AppState';
import MenuItem from 'material-ui/MenuItem';
import select from '../common/fields/Select';

let scheduleForm = reduxForm.reduxForm({
    form: 'ScheduleEdit'
})(
(props: FormProps 
    & { record: ScheduleRecord } 
    & { startSendValue: 'now' | 'after_amount' | 'specific_time' }) => {


    return <form 
        onSubmit={ props.handleSubmit(props.submit) }>
            <div>
                <Field
                    name="name"
                    label="Name"
                    component={ input } />
            </div>
            <div>
                <Field
                    name="batchSize"
                    label="Batch size"
                    component={ input } />
            </div>
            <div>
                <Field
                    name="batchInterval"
                    label="Batch interval"
                    component={ input } />
            </div>
            <div>
                <Field
                    name="timeBetweenBatches"
                    label="Sleep time"
                    component={ input } />
            </div>

            <div>
                <Field
                    name="startType"
                    label="Start sending"
                    component={ select }>
                        <MenuItem value={'now'} primaryText="Now" />
                        <MenuItem value={'after_amount'} primaryText="After an amount of time" />
                        <MenuItem value={'specific_time'} primaryText="At a specific time" />
                </Field>
            </div>

            { props.startSendValue == 'after_amount'
            && 
            <div>
                <Field
                    name="startAt"
                    label="After amount..."
                    component={ input } />
            </div>
            }

            { props.startSendValue == 'specific_time'
            && 
            <div>
                <TimePicker
                    format="24hr"
                    hintText="Start sending at"
                    />
            </div>
            }
            <Submit />
    </form>
}
);

const selector = reduxForm.formValueSelector('ScheduleEdit')

//http://redux-form.com/6.0.0-alpha.11/examples/selectingFormValues/
export default connect(
  (state: AppState) => {
    const startSendValue = selector(state, 'startType')
    return {
      startSendValue,
      initialValues: state.schedule.selectedRecord,
      record: state.schedule.selectedRecord,
    }
  }
)(scheduleForm)