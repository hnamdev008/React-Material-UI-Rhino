import ActionCreator from './ActionCreator';
import PlunderService from '../service/PlunderService';
import PlunderMapper from '../mappers/PlunderMapper';
import { ActionType } from './ActionType';
import Ref from '../model/state/Ref';

class PlunderAction extends ActionCreator<PlunderService> {
    private static QUALIFIER = 'plunder';

    constructor() {
        super(PlunderService, PlunderMapper, PlunderAction.QUALIFIER)
    }
}

export default new PlunderAction();