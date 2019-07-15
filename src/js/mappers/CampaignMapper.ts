import Mapper from './Mapper';
import CampaignXDto from '../model/dto/campaign/CampaignXDto';
import CampaignDto from '../model/dto/campaign/CampaignDto';
import CampaignState from '../model/state/campaign/CampaignState';
import CampaignRecord from '../model/state/campaign/CampaignRecord';
import { 
    refClient
} from './common/AssemblyUtil';

class CampaignMapperStatic implements Mapper { 
    toState(result: CampaignXDto): CampaignState {
        const state = new CampaignState();

        state.records = result.campaigns.map(dto => {             
            return {
                client: refClient(dto, result.clients),
                name: dto.name,
                description: dto.description,
                id: dto.id
            }
            
        });        

        return state;
    }

    toForm(dto: CampaignDto) {
        return {
            client: dto.client,
            name: dto.name,
            description: dto.description,
            id: dto.id
        }
    }

    toDto(state: CampaignRecord): CampaignDto {
        return {
            "client": state.client && state.client.id,
            "description": state.description,
            "name": state.name,
            commit: true,
            id: state.id            
        }
    }
}
const CampaignMapper = new CampaignMapperStatic();
export default CampaignMapper;