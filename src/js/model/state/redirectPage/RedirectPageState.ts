import { CrudState } from '../CrudState';
import RedirectPageRecord from './RedirectPageRecord';
import RedirectPageWidget from './RedirectPageWidget';

class RedirectPageState extends CrudState {
    constructor() {
        super('redirectPage');
    }

    records: RedirectPageRecord[];
    selectedRecord: RedirectPageRecord;
    widgetState: RedirectPageWidget;
}

export default RedirectPageState;