import { CrudState } from '../CrudState';
import EmailServerRecord from './EmailServerRecord';

class EmailServerState extends CrudState {
    constructor() {
        super('emailServer');
    }

    records: EmailServerRecord[];
    selectedRecord: EmailServerRecord;
}

export default EmailServerState;