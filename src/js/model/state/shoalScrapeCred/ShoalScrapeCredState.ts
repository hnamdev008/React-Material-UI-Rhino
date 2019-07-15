import { CrudState } from '../CrudState';
import ShoalScrapeCredRecord from './ShoalScrapeCredRecord';
import ShoalScrapeCredWidget from './ShoalScrapeCredWidget';

class ShoalScrapeCredState extends CrudState {
    constructor() {
        super('shoalScrapeCred');
    }

    records: ShoalScrapeCredRecord[];
    selectedRecord: ShoalScrapeCredRecord;
    widgetState: ShoalScrapeCredWidget;
}

export default ShoalScrapeCredState;