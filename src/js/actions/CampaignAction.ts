import ActionCreator from './ActionCreator';
import CampaignService from '../service/CampaignService';
import ClientService from '../service/ClientService';
import CampaignMapper from '../mappers/CampaignMapper';
import { ActionType } from './ActionType';
import Ref from '../model/state/Ref';

class CampaignAction extends ActionCreator<CampaignService> {
    private static QUALIFIER = 'campaign';

    constructor() {
        super(CampaignService, CampaignMapper, CampaignAction.QUALIFIER)
    }
}

export default new CampaignAction();