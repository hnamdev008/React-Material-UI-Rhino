import { CrudState } from '../CrudState';
import ScheduleRecord from './ScheduleRecord';

class ScheduleState extends CrudState {
    constructor() {
        super('schedule');
    }

    records: ScheduleRecord[];
    selectedRecord: ScheduleRecord;
}

export default ScheduleState;