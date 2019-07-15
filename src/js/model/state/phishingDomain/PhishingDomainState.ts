import { CrudState } from '../CrudState';
import PhishingDomainRecord from './PhishingDomainRecord';
import PhishingDomainWidget from './PhishingDomainWidget';

class PhishingDomainState extends CrudState {
    constructor() {
        super('phishingDomain');
    }

    records: PhishingDomainRecord[];
    selectedRecord: PhishingDomainRecord;
    widgetState: PhishingDomainWidget;
}

export default PhishingDomainState;