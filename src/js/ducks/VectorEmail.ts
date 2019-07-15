import Action from './common/Action';
import VectorEmailService from '../service/VectorEmailService'
import VectorEmailState from '../model/state/vectorEmail/VectorEmailState'
import VectorEmailRecord from '../model/state/vectorEmail/VectorEmailRecord'
import { copy } from './common/Util';

const LOAD = 'skiff/vector-email/LOAD'

export default (state = new VectorEmailState(), action: Action) => {
    switch(action.type) {
        case LOAD:
            return copy<VectorEmailState>(action.payload);

        default: return state;
    }
}

export const load = () => {
    return (dispatch) => {
        new VectorEmailService()
        .read()
        .then(result => {
            const state = new VectorEmailState();
            state.records = result.vector_emails
            .map(dto => {
                const record = new VectorEmailRecord();
                
                record.state = dto.state;
                record.client = dto.engagement.campaign.client.name;
                record.campaign = dto.engagement.campaign.name;
                record.engagement = dto.engagement.name;
                record.target = dto.target.email;
                record.targetList = dto.engagement.target_lists
                    .filter(list => {
                        return list.client.id == dto.engagement.campaign.client.id
                    })[0].nickname;
                record.scheduleSending = dto.send_at;
                record.targetTimezone = dto.engagement.campaign.client.default_time_zone;
                record.id = dto.id;

                return record;
            })

            dispatch({
                type: LOAD,
                payload: state
            });
        });
    }
}