import reduce from '../common';
import EngagementState from '../../model/state/engagement/EngagementState'
import EngagementRecord from '../../model/state/engagement/EngagementRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(
    new EngagementState(), 
    new EngagementRecord(),
    (state: EngagementState, action: Action) => {
        if(action.type == ActionType.ENGAGEMENT_START
            || action.type == ActionType.ENGAGEMENT_STOP) {
            const newState = copy<EngagementState>(state);
            newState.selectedRecord.state = action.payload;
            return newState;
        }
    });