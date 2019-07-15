import reduce from '../common';
import EmailServerState from '../../model/state/emailServer/EmailServerState'
import EmailServerRecord from '../../model/state/emailServer/EmailServerRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(
    new EmailServerState(), 
    new EmailServerRecord(),
    (state: EmailServerState, action: Action) => {
        if(action.type == ActionType.EMAIL_SERVER_EMAIL_CHECK_PENDING) {
            const newState = copy<EmailServerState>(state);
            newState.selectedRecord.checkEmailMessage = action.payload;
            return newState;
        }
    });