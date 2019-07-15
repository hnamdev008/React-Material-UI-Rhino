import Mapper from './Mapper';
import LandingPageXDto from '../model/dto/landingPage/LandingPageXDto';
import LandingPageDto from '../model/dto/landingPage/LandingPageDto';
import LandingPageState from '../model/state/landingPage/LandingPageState';
import LandingPageRecord from '../model/state/landingPage/LandingPageRecord';
import { 
    refScraperUserAgent
} from './common/AssemblyUtil';

class LandingPageMapperStatic implements Mapper { 
    toState(result: LandingPageXDto): LandingPageState {
        const state = new LandingPageState();

        state.records = result.landing_pages.map(dto => {             
            return {
                scraperUserAgent: refScraperUserAgent(dto, result.scraper_user_agent),
                status: dto.status,
                name: dto.name,
                url: dto.url,
                isRedirectPage: dto.is_redirect_page,
                pageType: dto.page_type,
                path: dto.path,
                dateCreated: dto.date_created,
                id: dto.id,
                source: dto.source
            }
            
        });        

        return state;
    }

    toForm(dto: LandingPageDto) {
        return {
            scraperUserAgent: dto.scraper_user_agent,
            status: dto.status,
            name: dto.name,
            url: dto.url,
            isRedirectPage: dto.is_redirect_page,
            pageType: dto.page_type,
            path: dto.path,
            dateCreated: dto.date_created,
            id: dto.id,
            source: dto.source
        }
    }

    toDto(state: LandingPageRecord): LandingPageDto {
        return {
            "status": state.status,
            "name": state.name,
            "url": state.url,
            "is_redirect_page": state.isRedirectPage,
            "page_type": state.pageType,
            "path": state.path,
            "scraper_user_agent": state.scraperUserAgent && state.scraperUserAgent.id,
            "date_created": state.dateCreated,
            source: state.source,
            commit: true,
            id: state.id            
        }
    }
}
const LandingPageMapper = new LandingPageMapperStatic();
export default LandingPageMapper;