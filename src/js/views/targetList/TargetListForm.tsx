import * as React from 'react';
import { connect } from 'react-redux';
import TargetListFlatViewRecord from '../../model/state/targetListFlatView/TargetListFlatViewRecord';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import TargetListAction from '../../actions/TargetListAction'
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
const ReactDataGrid = require('react-data-grid');
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import TargetListEditor from './TargetListEditor';

 //helper to generate a random date
// function randomDate(start, end) {
//   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
//}

const tf = (props: any) => <TextField
        hintText={ props.label }
        floatingLabelText={ props.label }
        errorText={
            props.meta.touched && props.meta.error
        }
        type={props.type}
        onBlur={
            (event) => {
                props.meta.dispatch(TargetListAction.addColumn(event.target.value));
            } }
        disabled={ props['disabled'] }
    />

const FORM = 'TargetListForm'

let targetListForm = reduxForm.reduxForm({
    form: FORM
})(
(class TargetListRoot extends React.Component<FormProps 
    & { record: TargetListFlatViewRecord }
    & { newColumnValue: string }, { rows: any[]}> {
        constructor() {
            super();
        }         

        private handleSplit = (categorized: any[]) => {
            const split = Object.assign({ target: categorized }, this.props.record);
            TargetListAction.split(this.props.dispatch, split);
        }

        private feedbackFn = (msg: string) => {
            TargetListAction.alert(this.props.dispatch, msg);
        }
        
        public render() {
            

        return <form 
            onSubmit={ this.props.handleSubmit(this.props.submit) }>
                <ErrAlert errorMsg={ this.props.error } />

                <div>
                    <Field
                        name="description"
                        label="Description"
                        component={ textArea } />
                </div>
                <div>
                    <Field
                        name="nickname"
                        label="List name"
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="client"
                        label="Clients"
                        fetch={ FetchAction.getClientSuggestions }
                        component={ autoComplete } /> 
                </div>
               
                <Field
                    name="target"
                    feedbackFn={ this.feedbackFn }
                    handleSplit={ this.handleSplit }
                    component={ TargetListEditor } />
               
                <Submit />
        </form>
        }
}));

const selector = reduxForm.formValueSelector('TargetListForm')

export default connect(
    (state: AppState) => {
        const newColumnValue = selector(state, 'newColumn')    
        return {
            initialValues: state.targetList.selectedRecord,
            record: state.targetList.selectedRecord    
        }
    }
)(targetListForm);

