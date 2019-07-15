import ActionCreator from './ActionCreator';
import PhishingDomainService from '../service/PhishingDomainService';
import PhishingDomainMapper from '../mappers/PhishingDomainMapper';
import { ActionType } from './ActionType';
import Ref from '../model/state/Ref';

class PhishingDomainAction extends ActionCreator<PhishingDomainService> {
    private static QUALIFIER = 'phishingDomain';

    constructor() {
        super(PhishingDomainService, PhishingDomainMapper, PhishingDomainAction.QUALIFIER)
    }
}

export default new PhishingDomainAction();