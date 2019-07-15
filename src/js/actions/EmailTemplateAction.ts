import ActionCreator from './ActionCreator';
import EmailTemplateService from '../service/EmailTemplateService';
import EmailTemplateMapper from '../mappers/EmailTemplateMapper';
import { ActionType } from './ActionType';
import Ref from '../model/state/Ref';

class EmailTemplateAction extends ActionCreator<EmailTemplateService> {
    private static QUALIFIER = 'emailTemplate';

    constructor() {
        super(EmailTemplateService, EmailTemplateMapper, EmailTemplateAction.QUALIFIER)
    }

    public checkShortcodes(template: string, targetListId: number): Function {
        return (dispatch) => {
            return new EmailTemplateService()
                .checkShortcodes({
                    template,
                    target_list_id: targetListId
                })
            .then(response => {
                dispatch({
                    type: ActionType.EMAIL_TEMPLATE_SHORTCODE_CHECK,
                    payload: response,
                    context: this.qualifier
                });
            });
        }
    }
}

export default new EmailTemplateAction();