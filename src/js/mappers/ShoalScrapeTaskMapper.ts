import Mapper from './Mapper';
import ShoalScrapeTaskXDto from '../model/dto/shoalScrapeTask/ShoalScrapeTaskXDto';
import ShoalScrapeTaskDto from '../model/dto/shoalScrapeTask/ShoalScrapeTaskDto';
import ShoalScrapeTaskState from '../model/state/shoalScrapeTask/ShoalScrapeTaskState';
import ShoalScrapeTaskRecord from '../model/state/shoalScrapeTask/ShoalScrapeTaskRecord';
import { 
    refShoalScrapeCreds
} from './common/AssemblyUtil';

class ShoalScrapeTaskMapperStatic implements Mapper { 
    toState(result: ShoalScrapeTaskXDto): ShoalScrapeTaskState {
        const state = new ShoalScrapeTaskState();

        state.records = result.shoal_scrape_tasks.map(dto => {             
            return {
                shoalScrapeCreds: refShoalScrapeCreds(dto, result.shoal_scrape_creds),
                company: dto.company,
                domain: dto.domain,
                currentTaskId: dto.current_task_id,
                state: dto.state,
                lastStartedAt: dto.last_started_at,
                error: dto.error,
                path: dto.path,
                id: dto.id
            }
            
        });        

        return state;
    }

    toForm(dto: ShoalScrapeTaskDto) {
        return {
            shoalScrapeCreds: dto.shoalscrape_creds,
            company: dto.company,
            domain: dto.domain,
            id: dto.id
        }
    }

    toDto(state: ShoalScrapeTaskRecord): ShoalScrapeTaskDto {
        return {
            shoalscrape_creds: state.shoalScrapeCreds && state.shoalScrapeCreds.id,
            company: state.company,
            domain: state.domain,
            id: state.id,
            commit: true           
        }
    }
}
const ShoalScrapeTaskMapper = new ShoalScrapeTaskMapperStatic();
export default ShoalScrapeTaskMapper;