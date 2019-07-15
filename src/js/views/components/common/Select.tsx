import * as React from 'react';
import SelectField from 'material-ui/SelectField'
import FieldProps from './FieldProps';

const select = (props: Props & FieldProps & { initValue }) => {
    return <SelectField
        value={ props.initValue }
        floatingLabelText={props.label}
        hintText={props.label}
        children={ props.children }
        onChange={
            (event, idx, value) => props.input.onChange(value) }
        errorText={
            props.meta.touched && props.meta.error } />
}


interface Props {
    label: string
}

export default select;