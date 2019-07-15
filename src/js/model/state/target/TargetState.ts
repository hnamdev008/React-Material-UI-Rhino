import { CrudState } from '../CrudState';
import TargetRecord from './TargetRecord';

class TargetState extends CrudState {
    constructor() {
        super('target');
    }

    records: TargetRecord[];
    selectedRecord: TargetRecord;
}

export default TargetState;