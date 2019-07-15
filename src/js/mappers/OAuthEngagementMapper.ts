import Mapper from './Mapper';
import OAuthEngagementXDto from '../model/dto/oAuthEngagement/OAuthEngagementXDto';
import OAuthEngagementDto from '../model/dto/oAuthEngagement/OAuthEngagementDto';
import OAuthEngagementState from '../model/state/oAuthEngagement/OAuthEngagementState';
import OAuthEngagementRecord from '../model/state/oAuthEngagement/OAuthEngagementRecord';
import { 
    refOAuthConsumer,
    refCampaign,
    refEmailTemplate,
    refSchedule,
    refTargetLists,
    refEmailServer
} from './common/AssemblyUtil';

class OAuthEngagementMapperStatic implements Mapper { 
    toState(result: OAuthEngagementXDto): OAuthEngagementState {
        const state = new OAuthEngagementState();

        state.records = result.o_auth_engagements.map(dto => {             
            return {
                oAuthConsumer: refOAuthConsumer(dto, result.o_auth_consumers),
                campaign: refCampaign(dto, result.campaigns),
                emailTemplate: refEmailTemplate(dto, result.email_templates),
                schedule: refSchedule(dto, result.schedule_intervals),
                targetLists: refTargetLists(dto, result.target_lists),
                emailServer: refEmailServer(dto, result.email_servers),
                state: dto.state,
                name: dto.name,
                description: dto.description,
                id: dto.id
            }
            
        });        

        return state;
    }

    toForm(dto: OAuthEngagementDto) {
        return {
            oAuthConsumer: dto.oauth_consumer,
            campaign: dto.campaign,
            emailTemplate: dto.email_template,
            schedule: dto.interval,
            targetLists: dto.target_lists,
            emailServer: dto.email_server,
            state: dto.state,
            name: dto.name,
            description: dto.description,
            id: dto.id
        }
    }

    toDto(state: OAuthEngagementRecord): OAuthEngagementDto {
        return {
            "oauth_consumer": state.oAuthConsumer && state.oAuthConsumer.id,
            "description": state.description,
            "campaign": state.campaign && state.campaign.id,
            "email_template": state.emailTemplate && state.emailTemplate.id,
            "interval": state.schedule && state.schedule.id,
            "target_lists": state.targetLists && state.targetLists.map(list => list.id),
            "state": state.state,
            "email_server": state.emailServer && state.emailServer.id,
            "name": state.name,
            commit: true,
            id: state.id            
        }
    }
}
const OAuthEngagementMapper = new OAuthEngagementMapperStatic();
export default OAuthEngagementMapper;