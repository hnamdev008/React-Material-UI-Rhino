import { CrudState } from '../CrudState';
import EngagementRecord from './EngagementRecord';

class EngagementState extends CrudState {
    constructor() {
        super('engagement');
    }

    records: EngagementRecord[];
    selectedRecord: EngagementRecord;
}

export default EngagementState;