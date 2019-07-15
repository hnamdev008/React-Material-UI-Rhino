import Action from './common/Action';
import FeedbackState from '../model/state/FeedbackState'
import { copy } from './common/Util';

const ALERT_ERR = 'skiff/feedback/ALERT_ERR'
const ALERT_INFO = 'skiff/feedback/ALERT_INFO'

export const types = {
    ALERT_ERR,
    ALERT_INFO
}

export default (state: FeedbackState = {}, action: Action) => {
    switch(action.type) {
        case ALERT_ERR:
            state.errMsg = action.payload;
            return copy<FeedbackState>(state);

        case ALERT_INFO:
            const feedbackState: FeedbackState = {
                infoMsg: action.payload
            }
            return feedbackState;

        default: return state;
    }
}

export const alertError = (msg: string) => {
    return (dispatch) => {
        dispatch({
            type: ALERT_ERR,
            payload: msg
        });
    }
}

export const alertInfo = (msg: string) => {
    return (dispatch) => {
        dispatch({
            type: ALERT_INFO,
            payload: msg
        });
    }
}
