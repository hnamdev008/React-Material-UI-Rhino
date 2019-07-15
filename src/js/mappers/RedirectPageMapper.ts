import Mapper from './Mapper';
import RedirectPageXDto from '../model/dto/redirectPage/RedirectPageXDto';
import RedirectPageDto from '../model/dto/redirectPage/RedirectPageDto';
import RedirectPageState from '../model/state/redirectPage/RedirectPageState';
import RedirectPageRecord from '../model/state/redirectPage/RedirectPageRecord';
import { 
    refScraperUserAgent
} from './common/AssemblyUtil';

class RedirectPageMapperStatic implements Mapper { 
    toState(result: RedirectPageXDto): RedirectPageState {
        const state = new RedirectPageState();

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

    toForm(dto: RedirectPageDto) {
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

    toDto(state: RedirectPageRecord): RedirectPageDto {
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
const RedirectPageMapper = new RedirectPageMapperStatic();
export default RedirectPageMapper;