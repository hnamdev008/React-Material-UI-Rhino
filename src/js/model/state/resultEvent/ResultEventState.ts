import { CrudState } from '../CrudState';
import ResultEventRecord from './ResultEventRecord';

class ResultEventState extends CrudState {
    constructor() {
        super('resultEvent');
    }

    records: ResultEventRecord[];
    selectedRecord: ResultEventRecord;
    engagmentName?: string;
}

export default ResultEventState;