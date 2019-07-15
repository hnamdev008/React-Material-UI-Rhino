import { CrudState } from '../CrudState';
import ScraperUserAgentRecord from './ScraperUserAgentRecord';
import ScraperUserAgentWidget from './ScraperUserAgentWidget';

class ScraperUserAgentState extends CrudState {
    constructor() {
        super('scraperUserAgent');
    }

    records: ScraperUserAgentRecord[];
    selectedRecord: ScraperUserAgentRecord;
    widgetState: ScraperUserAgentWidget;
}

export default ScraperUserAgentState;