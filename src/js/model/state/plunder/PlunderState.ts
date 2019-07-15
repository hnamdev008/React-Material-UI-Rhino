import { CrudState } from '../CrudState';
import PlunderRecord from './PlunderRecord';
import PlunderWidget from './PlunderWidget';

class PlunderState extends CrudState {
    constructor() {
        super('plunder');
    }

    records: PlunderRecord[];
    selectedRecord: PlunderRecord;
    widgetState: PlunderWidget;
}

export default PlunderState;