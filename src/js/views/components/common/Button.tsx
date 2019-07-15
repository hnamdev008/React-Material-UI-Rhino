import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const button = (props: Props) =>
    <RaisedButton
        {...props}
        primary={ true } />  

interface Props {
    label: string
}

export default button;