import ActionCreator from './ActionCreator';
import LandingPageService from '../service/LandingPageService';
import LandingPageMapper from '../mappers/LandingPageMapper';
import { ActionType } from './ActionType';
import Ref from '../model/state/Ref';

class LandingPageAction extends ActionCreator<LandingPageService> {
    private static QUALIFIER = 'landingPage';

    constructor() {
        super(LandingPageService, LandingPageMapper, LandingPageAction.QUALIFIER)
    }

    public getTemplate(path: string): Promise<any> {
        return new LandingPageService().getTemplate(path);
    }
}

export default new LandingPageAction();