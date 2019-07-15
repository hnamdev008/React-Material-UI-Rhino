import * as React from 'react';
import Snackbar from 'material-ui/Snackbar';

const errAlert = ({ errorMsg }) => 
    <Snackbar
        open={ !!errorMsg }
        message={errorMsg || ''}
        autoHideDuration={8000} 
        contentStyle={ 
            {
                color: 'red'
            } 
        }
        bodyStyle={
            {
                backgroundColor: 'black'
            }
        } />

export default errAlert;