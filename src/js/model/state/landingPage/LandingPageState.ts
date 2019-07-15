import { CrudState } from '../CrudState';
import LandingPageRecord from './LandingPageRecord';
import LandingPageWidget from './LandingPageWidget';

class LandingPageState extends CrudState {
    constructor() {
        super('landingPage');
    }

    records: LandingPageRecord[];
    selectedRecord: LandingPageRecord;
    widgetState: LandingPageWidget;
}

export default LandingPageState;