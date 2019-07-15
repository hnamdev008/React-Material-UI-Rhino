import { CrudState } from '../CrudState';
import VectorEmailRecord from './VectorEmailRecord';
import VectorEmailWidget from './VectorEmailWidget';

class VectorEmailState extends CrudState {
    constructor() {
        super('vectorEmail');
    }

    records: VectorEmailRecord[];
    selectedRecord: VectorEmailRecord;
    widgetState: VectorEmailWidget;
}

export default VectorEmailState;