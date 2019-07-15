import { Reducer } from 'redux';
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { CrudState} from '../../model/state/CrudState';
import Record from '../../model/state/Record';
import { copy } from '../../common/Util';

const reduce = <T extends CrudState>(
        defaultState: T,
        defaultRecord: Record,
        furtherReduce?: (state: T, action: Action) => T
    ): Reducer<T> => {
        return (state: T = defaultState, action: Action): T => {
            if(state.qualifier !== action.context) return state;

            switch(action.type) {
                case ActionType.CRUD_INIT:
                    return copy<T>(action.payload);

                case ActionType.CRUD_TOGGLE_VIEW:
                    state.view = state.view == 'table'
                    ? 'grid'
                    : 'table'
                    return copy<T>(state);

                case ActionType.CRUD_OPEN_ADD:
                    state.mode = 'add'
                    state.selectedRecord = defaultRecord;
                    return copy<T>(state);
                        
                case ActionType.CRUD_CANCEL:
                    state.mode = 'root'
                    return copy<T>(state);
                        
                case ActionType.CRUD_ADD_SUCCESS:
                    state.mode = 'root'
                    return copy<T>(state);        

                case ActionType.CRUD_OPEN_EDIT:
                    state.mode = 'edit'
                    state.selectedRecord = state.records.filter(
                        record => record.id == action.payload)[0];
                    return copy<T>(state);
                        
                case ActionType.CRUD_CANCEL:
                    state.mode = 'root'
                    return copy<T>(state);

                case ActionType.CRUD_EDIT_SUCCESS:
                    state.mode = 'root'
                    return copy<T>(state);

                case ActionType.CRUD_REMOVE_SUCCESS:
                    state.mode = 'root'
                    return copy<T>(state);
        }

        if(furtherReduce) return furtherReduce(state, action);

        return state;
    } 
};

export default reduce;