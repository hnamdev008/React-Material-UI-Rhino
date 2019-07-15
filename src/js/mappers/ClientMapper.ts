import Mapper from './Mapper';
import ClientXDto from '../model/dto/client/ClientXDto';
import ClientDto from '../model/dto/client/ClientDto';
import ClientState from '../model/state/client/ClientState';
import ClientRecord from '../model/state/client/ClientRecord';

class ClientMapperStatic implements Mapper { 
    toState(result: ClientXDto): ClientState {
        const state = new ClientState();

        state.records = result.clients.map(dto => {             
            return {
                id: dto.id,
                name: dto.name,
                url: dto.url,
                timezone: dto.default_time_zone,
            }
            
        });        

        return state;
    }

    toForm(dto: ClientDto) {
        return {
            id: dto.id,
            name: dto.name,
            url: dto.url,
            timezone: dto.default_time_zone,
        }
    }

    toDto(state: ClientRecord): ClientDto {
        return {
            "url": state.url,
            "default_time_zone": state.timezone['text'],
            "name": state.name,
            commit: true,
            id: state.id            
        }
    }
}
const ClientMapper = new ClientMapperStatic();
export default ClientMapper;