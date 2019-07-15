import { CrudState } from '../CrudState';
import OAuthResultRecord from './OAuthResultRecord';
import OAuthResultWidget from './OAuthResultWidget';

class OAuthResultState extends CrudState {
    constructor() {
        super('oAuthResult');
    }

    records: OAuthResultRecord[];
    selectedRecord: OAuthResultRecord;
    widgetState: OAuthResultWidget;
}

export default OAuthResultState;