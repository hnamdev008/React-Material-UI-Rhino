import * as React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import FieldProps from './FieldProps';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;

const field = (props: Props & FieldProps & { initValue }) => {    
    return <AutoComplete
        hintText={ props.label }
        dataSource={ props.data || [] }
        dataSourceConfig={ { text: 'label', value: 'id'} }
        filter={AutoComplete.fuzzyFilter}
        floatingLabelText={ props.label }
        maxSearchResults={ 5 } 
        errorText={
            props.meta.touched && props.meta.error }
        onNewRequest={
            (chosen) => props.input.onChange(chosen) }
        {...props.input}
        searchText={props.initValue && props.initValue.label}
    />  
}

interface Props {
    label: string
    data: any[]
}

export default field;