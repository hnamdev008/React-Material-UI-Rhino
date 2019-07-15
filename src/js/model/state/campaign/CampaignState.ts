import { CrudState } from '../CrudState';
import CampaignRecord from './CampaignRecord';
import CampaignWidget from './CampaignWidget';

class CampaignState extends CrudState {
    constructor() {
        super('campaign');
    }

    records: CampaignRecord[];
    selectedRecord: CampaignRecord;
    widgetState: CampaignWidget;
}

export default CampaignState;