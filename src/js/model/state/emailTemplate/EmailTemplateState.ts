import { CrudState } from '../CrudState';
import EmailTemplateRecord from './EmailTemplateRecord';

class EmailTemplateState extends CrudState {
    constructor() {
        super('emailTemplate');
    }

    records: EmailTemplateRecord[];
    selectedRecord: EmailTemplateRecord;
}

export default EmailTemplateState;