import { CrudState } from '../CrudState';
import ClientRecord from './ClientRecord';
import ClientWidget from './ClientWidget';

class ClientState extends CrudState {
    constructor() {
        super('client');
    }

    records: ClientRecord[];
    selectedRecord: ClientRecord;
    widgetState: ClientWidget;
}

export default ClientState;