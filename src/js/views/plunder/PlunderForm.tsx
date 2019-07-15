import * as React from 'react';
import { connect } from 'react-redux';
import PlunderRecord from '../../model/state/plunder/PlunderRecord';
import PlunderWidget from '../../model/state/plunder/PlunderWidget';
import Ref from '../../model/state/Ref';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;
import PlunderAction from '../../actions/PlunderAction'
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

const FORM = 'PlunderForm'

let plunderForm = reduxForm.reduxForm({
    form: FORM
})(
(props: FormProps 
    & { widget: PlunderWidget }
    & { record: PlunderRecord } ) => {         
        return <form 
            onSubmit={ props.handleSubmit(props.submit) }>
                <ErrAlert errorMsg={ props.error } />

                <div>
                    <Field
                        name="oAuthResult"
                        label="OAuth result"
                        disabled={ true }
                        data={props.record.oAuthResult}
                        component={ autoComplete } /> 
                </div>
                <div>
                    <Field
                        name="path"
                        label="Path"
                        disabled={ true }
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="fileId"
                        label="File id"
                        disabled={ true }
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="filename"
                        label="Filename"
                        disabled={ true }
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="mimetype"
                        label="Mimetype"
                        disabled={ true }
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="lastModified"
                        label="Last modified"
                        disabled={ true }
                        component={ input } />
                </div>
                <div>
                    <Field
                        name="data" 
                        label="Data"
                        disabled={ true }
                        component={ textArea } />
                </div>

                <Submit />
        </form>
});

export default connect(
    (state: AppState) => {    
        return {
            initialValues: state.plunder.selectedRecord,
            record: state.plunder.selectedRecord    
        }
    }
)(plunderForm);

