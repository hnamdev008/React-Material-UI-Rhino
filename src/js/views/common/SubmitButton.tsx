import * as React from 'react';

const submitBtn = (props: { submitId: string }) => 
    <button type="submit" style={ { display: 'none' } } id={ props.submitId || 'submit-form' } />

export default submitBtn;