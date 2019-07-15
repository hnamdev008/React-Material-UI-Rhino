import Mapper from './Mapper';
import ScraperUserAgentXDto from '../model/dto/scraperUserAgent/ScraperUserAgentXDto';
import ScraperUserAgentDto from '../model/dto/scraperUserAgent/ScraperUserAgentDto';
import ScraperUserAgentState from '../model/state/scraperUserAgent/ScraperUserAgentState';
import ScraperUserAgentRecord from '../model/state/scraperUserAgent/ScraperUserAgentRecord';
import { 
    refClient
} from './common/AssemblyUtil';

class ScraperUserAgentMapperStatic implements Mapper { 
    toState(result: ScraperUserAgentXDto): ScraperUserAgentState {
        const state = new ScraperUserAgentState();

        state.records = result.scraper_user_agents.map(dto => {             
            return {
                userAgentData: dto.user_agent_data,
                name: dto.name,
                id: dto.id
            }
            
        });        

        return state;
    }

    toForm(dto: ScraperUserAgentDto) {
        return {
            userAgentData: dto.user_agent_data,
            name: dto.name,
            id: dto.id
        }
    }

    toDto(state: ScraperUserAgentRecord): ScraperUserAgentDto {
        return {
            user_agent_data: state.userAgentData,
            name: state.name,
            id: state.id,
            commit: true          
        }
    }
}
const ScraperUserAgentMapper = new ScraperUserAgentMapperStatic();
export default ScraperUserAgentMapper;