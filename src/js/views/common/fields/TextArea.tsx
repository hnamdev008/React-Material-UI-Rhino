import * as React from 'react';
import TextField from 'material-ui/TextField'
import Props from './CustomProps';
import FieldProps from './FieldProps';

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
        disabled={ props['disabled'] }
    />
}

export default renderTextArea;