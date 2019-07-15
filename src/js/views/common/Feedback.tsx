import * as React from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import { AppState } from '../../model/state/AppState';
import FeedbackState from '../../model/state/FeedbackState';

//https://github.com/callemall/material-ui/issues/2811#issuecomment-169441872
const feedback = (props: Props) => {
    if(props.state.errMsg) {
        return (
            <Snackbar
                open={ true }
                message={props.state.errMsg || ''}
                autoHideDuration={ 10000 }

                contentStyle={ 
                    {
                        color: 'red'
                    } 
                }
                bodyStyle={
                    {
                        flexGrow: 0,
                        height: '100%',
                        backgroundColor: 'black'
                    }
                }/>
        )
    } else if (props.state.infoMsg) {
        return (
            <Snackbar
                open={ true }
                message={props.state.infoMsg || ''}
                autoHideDuration={ 10000 }

                contentStyle={ 
                    {
                        color: 'green'
                    } 
                }
                bodyStyle={
                    {
                        flexGrow: 0,
                        height: '100%',
                        backgroundColor: 'black'
                    }
                }/>
        )
    } else return null;
}

interface Props {
    state: FeedbackState
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.feedback
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(feedback);