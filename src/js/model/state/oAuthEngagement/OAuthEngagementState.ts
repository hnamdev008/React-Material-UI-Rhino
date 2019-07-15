import { CrudState } from '../CrudState';
import OAuthEngagementRecord from './OAuthEngagementRecord';
import OAuthEngagementWidget from './OAuthEngagementWidget';

class OAuthEngagementState extends CrudState {
    constructor() {
        super('oAuthEngagement');
    }

    records: OAuthEngagementRecord[];
    selectedRecord: OAuthEngagementRecord;
    widgetState: OAuthEngagementWidget;
}

export default OAuthEngagementState;