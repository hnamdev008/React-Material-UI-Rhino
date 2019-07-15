import ActionCreator from './ActionCreator';
import ClientService from '../service/ClientService';
import ClientMapper from '../mappers/ClientMapper';
import { ActionType } from './ActionType';
import Ref from '../model/state/Ref';

class ClientAction extends ActionCreator<ClientService> {
    private static QUALIFIER = 'client';

    constructor() {
        super(ClientService, ClientMapper, ClientAction.QUALIFIER)
    }
}

export default new ClientAction();