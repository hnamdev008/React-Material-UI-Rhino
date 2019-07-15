import ActionCreator from './ActionCreator';
import ShoalScrapeTaskService from '../service/ShoalScrapeTaskService';
import ShoalScrapeTaskMapper from '../mappers/ShoalScrapeTaskMapper';
import { ActionType } from './ActionType';
import Ref from '../model/state/Ref';

class ShoalScrapeTaskAction extends ActionCreator<ShoalScrapeTaskService> {
    private static QUALIFIER = 'shoalScrapeTask';

    constructor() {
        super(ShoalScrapeTaskService, ShoalScrapeTaskMapper, ShoalScrapeTaskAction.QUALIFIER)
    }
}

export default new ShoalScrapeTaskAction();