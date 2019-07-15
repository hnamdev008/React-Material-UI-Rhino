import { CrudState } from '../CrudState';
import TargetListRecord from './TargetListRecord';

class TargetListState extends CrudState {
    constructor() {
        super('targetList');
    }

    records = new Array<TargetListRecord>();
    selectedRecord: TargetListRecord;
}

export default TargetListState;