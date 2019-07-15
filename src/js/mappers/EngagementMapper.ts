import Mapper from './Mapper';
import EngagementXDto from '../model/dto/engagement/EngagementXDto';
import EngagementDto from '../model/dto/engagement/EngagementDto';
import EngagementState from '../model/state/engagement/EngagementState';
import EngagementRecord from '../model/state/engagement/EngagementRecord';
import { 
    refLandingPage,
    refCampaign,
    refEmailServer,
    refEmailTemplate,
    refPhishingDomain,
    refRedirectPage,
    refSchedule,
    refTargetLists 
} from './common/AssemblyUtil';

class EngagementMapperStatic implements Mapper { 
    toState(result: EngagementXDto): EngagementState {
        const state = new EngagementState();

        state.records = result.engagements.map(dto => {             
            return {
                landingPage: refLandingPage(dto, result.landing_pages
                    .filter(page => !page.is_redirect_page)),
                campaign: refCampaign(dto, result.campaigns),
                emailTemplate: refEmailTemplate(dto, result.email_templates),
                schedule: refSchedule(dto, result.schedule_intervals),
                redirectPage: refRedirectPage(dto, result.landing_pages
                    .filter(page => page.is_redirect_page)),
                emailServer: refEmailServer(dto, result.email_servers),
                phishingDomain: refPhishingDomain(dto, result.phishing_domains),
                state: dto.state,
                path: dto.path,
                name: dto.name,
                description: dto.description,
                id: dto.id,
                targetLists: refTargetLists(dto, result.target_lists)
            }
            
        });

        state.page = result.meta.page;
        state.totalPages = result.meta.total_pages;

        return state;
    }

    toForm(dto: EngagementDto) {
        return {
            name: dto.name,
            description: dto.description,
            landingPage: dto.landing_page,
            phishingDomain: dto.domain,
            campaign: dto.campaign,
            emailTemplate: dto.email_template,
            schedule: dto.interval,
            redirectPage: dto.redirect_page,
            emailServer: dto.email_server,
            state: dto.state,
            path: dto.path,
        }
    }

    toDto(state: EngagementRecord): EngagementDto {
        return {
            "landing_page": state.landingPage && state.landingPage.id,
            "domain": state.phishingDomain && state.phishingDomain.id,
            "description": state.description,
            "campaign": state.campaign && state.campaign.id,
            "email_template": state.emailTemplate && state.emailTemplate.id,
            "interval": state.schedule && state.schedule.id,
            "redirect_page": state.redirectPage && state.redirectPage.id,
            "target_lists": null,
            "state": state.state,
            "path": state.path,
            "email_server": state.emailServer && state.emailServer.id,
            "name": state.name,
            commit: true,
            id: state.id
        }
    }
}
const EngagementMapper = new EngagementMapperStatic();
export default EngagementMapper;