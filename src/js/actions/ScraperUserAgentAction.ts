import ActionCreator from './ActionCreator';
import ScraperUserAgentService from '../service/ScraperUserAgentService';
import ClientService from '../service/ClientService';
import ScraperUserAgentMapper from '../mappers/ScraperUserAgentMapper';
import { ActionType } from './ActionType';
import Ref from '../model/state/Ref';

class ScraperUserAgentAction extends ActionCreator<ScraperUserAgentService> {
    private static QUALIFIER = 'scraperUserAgent';

    constructor() {
        super(ScraperUserAgentService, ScraperUserAgentMapper, ScraperUserAgentAction.QUALIFIER)
    }
}

export default new ScraperUserAgentAction();