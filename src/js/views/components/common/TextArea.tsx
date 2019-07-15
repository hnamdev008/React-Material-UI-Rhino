import * as React from 'react';
import TextField from 'material-ui/TextField'
import FieldProps from './FieldProps';

const textArea = (props: Props & FieldProps & { initValue }) => {
    return <TextField
        hintText={ props.label }
        floatingLabelText={ props.label }
        errorText={
            props.meta.touched && props.meta.error
        }
        {...props.input}
        value={ props.initValue }
        multiLine={true}
        rows={3}
    />
}


interface Props {
    label: string
}

export default textArea;