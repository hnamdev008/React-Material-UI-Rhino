import * as React from 'react';
import TextField from 'material-ui/TextField'
import Props from './CustomProps';
import FieldProps from './FieldProps';

const renderInput = (props: Props & FieldProps) => {
    return <TextField
        hintText={ props.label }
        floatingLabelText={ props.label }
        errorText={
            props.meta.touched && props.meta.error
        }
        type={props.type}
        {...props.input}
        disabled={ props['disabled'] }
    />
}

export default renderInput;