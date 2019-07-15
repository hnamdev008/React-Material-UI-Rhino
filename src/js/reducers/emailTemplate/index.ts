import reduce from '../common';
import EmailTemplateState from '../../model/state/emailTemplate/EmailTemplateState'
import EmailTemplateRecord from '../../model/state/emailTemplate/EmailTemplateRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(
    new EmailTemplateState(), 
    new EmailTemplateRecord(),
    (state: EmailTemplateState, action: Action) => {
        if(action.type == ActionType.EMAIL_TEMPLATE_SHORTCODE_CHECK) {
            const newState = copy<EmailTemplateState>(state);
            newState.selectedRecord.shortcodeErrors = action.payload.shortcode_errors;
            return newState;
        }
    });