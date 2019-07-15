import { CrudState } from '../CrudState';
import ProfileRecord from './ProfileRecord';
import ProfileWidget from './ProfileWidget';

class ProfileState extends CrudState {
    constructor() {
        super('profile');
    }

    records: ProfileRecord[];
    selectedRecord: ProfileRecord;
    widgetState: ProfileWidget;
}

export default ProfileState;