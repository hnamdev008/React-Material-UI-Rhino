import { CrudState } from '../CrudState';
import UserRecord from './UserRecord';

class UserState extends CrudState {
    constructor() {
        super('user');
    }

    records: UserRecord[];
    selectedRecord: UserRecord;
}

export default UserState;