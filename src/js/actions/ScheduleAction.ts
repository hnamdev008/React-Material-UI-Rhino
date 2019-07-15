import ActionCreator from './ActionCreator';
import ScheduleService from '../service/ScheduleService';
import ScheduleMapper from '../mappers/ScheduleMapper';
import { ActionType } from './ActionType';
import Ref from '../model/state/Ref';

class ScheduleAction extends ActionCreator<ScheduleService> {
    private static QUALIFIER = 'schedule';

    constructor() {
        super(ScheduleService, ScheduleMapper, ScheduleAction.QUALIFIER)
    }
}

export default new ScheduleAction();