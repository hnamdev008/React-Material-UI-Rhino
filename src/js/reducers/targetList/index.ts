import reduce from '../common';
import TargetListFlatViewState from '../../model/state/targetListFlatView/TargetListFlatViewState'
import TargetListFlatViewRecord from '../../model/state/targetListFlatView/TargetListFlatViewRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new TargetListFlatViewState(), new TargetListFlatViewRecord(),
(state: TargetListFlatViewState, action: Action) => {
        if(action.type == ActionType.TARGET_LIST_ADD_COLUMN) {
            state.selectedRecord.target
            .forEach(target => {
                target[action.payload] = '';
            })
            return copy<TargetListFlatViewState>(state);
        }

        if(action.type == ActionType.TARGET_LIST_UPDATE_ROW) {
            const event = action.payload;
            Object.assign(state.selectedRecord.target[event.rowIdx], event.updated);
            return copy<TargetListFlatViewState>(state);
        }

        if(action.type == ActionType.TARGET_LIST_ADD_ROW) {
            const event = action.payload;
            // Object.assign(state.selectedRecord.target[event.rowIdx], event.updated);
            const newObj = Object.assign({}, state.selectedRecord.target[0])
            
            Object.keys(newObj)
            .forEach(key => {
                newObj[key] = '';
            });

            state.selectedRecord.target.push(newObj);

            return copy<TargetListFlatViewState>(state);
        }

        if(action.type == ActionType.TARGET_LIST_SPLIT_SUCCESS) {
            return copy<TargetListFlatViewState>(state);
        }

        if(action.type == ActionType.TARGET_LIST_UPLOAD) {
            state.mode = 'add'
            state.selectedRecord = action.payload;
            return copy<TargetListFlatViewState>(state);
        }
    });