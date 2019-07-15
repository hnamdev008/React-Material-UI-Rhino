import ActionCreator from './ActionCreator';
import EmailServerService from '../service/EmailServerService';
import EmailServerMapper from '../mappers/EmailServerMapper';
import EmailServerRecord from '../model/state/emailServer/EmailServerRecord';
import { ActionType } from './ActionType';
import Ref from '../model/state/Ref';
import { types } from '../ducks/Feedback';

class EmailServerAction extends ActionCreator<EmailServerService> {
    private static QUALIFIER = 'emailServer';

    constructor() {
        super(EmailServerService, EmailServerMapper, EmailServerAction.QUALIFIER)
    }

    public checkEmail = (record: EmailServerRecord, recipient: string) => {
        return (dispatch) => {
            dispatch({
                type: ActionType.EMAIL_SERVER_EMAIL_CHECK_PENDING,
                payload: true,
                context: this.qualifier
            })

            new EmailServerService()
                .checkEmail({
                    id: record.id,
                    host: record.host,
                    port: record.port,
                    login: record.login,
                    password: record.password,
                    use_tls: record.useTls,
                    test_recipient: recipient,
                    commit: true
                })
            .then(response => {
                dispatch({
                    type: types.ALERT_ERR,
                    payload: response.error_message
                });

                dispatch({
                    type: ActionType.EMAIL_SERVER_EMAIL_CHECK_PENDING,
                    payload: false,
                    context: this.qualifier
                })
            });
        }
    }
}

export default new EmailServerAction();