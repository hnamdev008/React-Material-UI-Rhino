import Action from './common/Action';
import ResultEventService from '../service/ResultEventService'
import ResultEventState from '../model/state/resultEvent/ResultEventState'
import ResultEventRecord from '../model/state/resultEvent/ResultEventRecord'
import { copy } from './common/Util';

const VIEW = 'skiff/result-event/VIEW'
const LOAD = 'skiff/result-event/LOAD'
const CANCEL = 'skiff/result-event/CANCEL';

export default (state = new ResultEventState(), action: Action) => {
    switch(action.type) {
        case VIEW:
            return copy<ResultEventState>(action.payload);

        case CANCEL:
            state.mode = 'root';
            return copy<ResultEventState>(state);

        default: return state;
    }
}

export const cancel = () => {
    return (dispatch) => {
        dispatch({
            type: CANCEL
        });
    }
}

export const load = () => {
    return (dispatch) => {
        new ResultEventService()
        .read()
        .then(result => {
            const state = new ResultEventState();
            state.records = result.result_events
            .map(dto => {
                const record = new ResultEventRecord();
                
                record.eventType = dto.event_type;
                record.id = dto.id;
                record.ip = dto.ip;
                record.login = dto.login;
                record.password = dto.password;
                record.rawData = dto.raw_data;
                record.timestamp = dto.timestamp;
                record.userAgent = dto.userAgent;

                return record;
            })

            dispatch({
                type: LOAD,
                payload: state
            });
        });
    }
}

export const view = (engagementName: string, engagementId: number) => {
    return (dispatch) => {
        new ResultEventService()
        .readForEngagement(engagementId)
        .then(result => {
            const state = new ResultEventState();
            state.records = result.result_events
            .map(dto => {
                const record = new ResultEventRecord();
                
                record.eventType = dto.event_type;
                record.id = dto.id;
                record.ip = dto.ip;
                record.login = dto.login;
                record.password = dto.password;
                record.rawData = dto.raw_data;
                record.timestamp = dto.timestamp;
                record.userAgent = dto.userAgent;

                return record;
            })

            state.engagmentName = engagementName;
            state.mode = 'edit';

            dispatch({
                type: VIEW,
                payload: state
            });
        });
    }
}