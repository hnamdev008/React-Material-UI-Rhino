import * as React from 'react';
import SelectField from 'material-ui/SelectField'
import FieldProps from './FieldProps';
import CustomProps from './CustomProps';

const select = (props: CustomProps & FieldProps) => {
    return <SelectField
        value={ props.input.value }
        floatingLabelText={props.label}
        hintText={props.label}
        children={ props.children }
        onChange={
            (event, idx, value) => props.input.onChange(value) }
        errorText={
            props.meta.touched && props.meta.error } />
}

export default select;