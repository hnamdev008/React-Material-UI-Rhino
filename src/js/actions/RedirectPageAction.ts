import ActionCreator from './ActionCreator';
import RedirectPageService from '../service/RedirectPageService';
import ScraperUserAgentService from '../service/ScraperUserAgentService';
import RedirectPageMapper from '../mappers/RedirectPageMapper';
import { ActionType } from './ActionType';
import Ref from '../model/state/Ref';

class RedirectPageAction extends ActionCreator<RedirectPageService> {
    private static QUALIFIER = 'redirectPage';

    constructor() {
        super(RedirectPageService, RedirectPageMapper, RedirectPageAction.QUALIFIER)
    }

    public getTemplate(path: string): Promise<any> {
        return new RedirectPageService().getTemplate(path);
    }
}

export default new RedirectPageAction();