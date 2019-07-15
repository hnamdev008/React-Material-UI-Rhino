import ActionCreator from './ActionCreator';
import UserService from '../service/UserService';
import UserMapper from '../mappers/UserMapper';
import { ActionType } from './ActionType';
import Ref from '../model/state/Ref';

class UserAction extends ActionCreator<UserService> {
    private static QUALIFIER = 'user';

    constructor() {
        super(UserService, UserMapper, UserAction.QUALIFIER)
    }
}

export default new UserAction();