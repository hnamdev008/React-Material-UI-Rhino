import { CrudState } from '../CrudState';
import ShoalScrapeTaskRecord from './ShoalScrapeTaskRecord';
import ShoalScrapeTaskWidget from './ShoalScrapeTaskWidget';

class ShoalScrapeTaskState extends CrudState {
    constructor() {
        super('shoalScrapeTask');
    }

    records: ShoalScrapeTaskRecord[];
    selectedRecord: ShoalScrapeTaskRecord;
    widgetState: ShoalScrapeTaskWidget;
}

export default ShoalScrapeTaskState;