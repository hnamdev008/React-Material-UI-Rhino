import { CrudState } from '../CrudState';
import TargetListFlatViewRecord from './TargetListFlatViewRecord';

class TargetListFlatViewState extends CrudState {
    constructor() {
        super('targetList');
    }

    records = new Array<TargetListFlatViewRecord>();
    selectedRecord: TargetListFlatViewRecord;
}

export default TargetListFlatViewState;