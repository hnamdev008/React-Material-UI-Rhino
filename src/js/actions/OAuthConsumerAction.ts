import ActionCreator from './ActionCreator';
import OAuthConsumerService from '../service/OAuthConsumerService';
import OAuthConsumerMapper from '../mappers/OAuthConsumerMapper';
import { ActionType } from './ActionType';
import Ref from '../model/state/Ref';

class OAuthConsumerAction extends ActionCreator<OAuthConsumerService> {
    private static QUALIFIER = 'oAuthConsumer';

    constructor() {
        super(OAuthConsumerService, OAuthConsumerMapper, OAuthConsumerAction.QUALIFIER)
    }
}

export default new OAuthConsumerAction();