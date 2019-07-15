import ActionCreator from './ActionCreator';
import EngagementService from '../service/EngagementService';
import CampaignService from '../service/CampaignService';
import ScheduleService from '../service/ScheduleService';
import EmailServerService from '../service/EmailServerService';
import EmailTemplateService from '../service/EmailTemplateService';
import LandingPageService from '../service/LandingPageService';
import RedirectPageService from '../service/RedirectPageService';
import PhishingDomainService from '../service/PhishingDomainService';
import VectorEmailService from '../service/VectorEmailService';
import PreviewService from '../service/PreviewService';
import TargetListService from '../service/TargetListService';
import EngagementMapper from '../mappers/EngagementMapper';
import EngagementRecord from '../model/state/engagement/EngagementRecord'
import EngagementState from '../model/state/engagement/EngagementState'
import { ActionType } from './ActionType';
import Ref from '../model/state/RefZ';

class EngagementAction extends ActionCreator<EngagementService> {
    private static QUALIFIER = 'engagement';

    constructor() {
        super(EngagementService, EngagementMapper, EngagementAction.QUALIFIER)
    }

    public fetch(): Function {
        return (dispatch) =>
        new EngagementService().read()
        .then(dtos => {
            const state = EngagementMapper.toState(dtos);
            // const state = new EngagementState();
            // state.records = dtos.engagements.map(dto => {
            //     const record = new EngagementRecord();
            //     record.landingPage = new Ref(dto.landing_page.id, dto.landing_page.name);
            //     record.campaign = new Ref(dto.campaign.id, dto.campaign.name);
            //     record.emailTemplate = new Ref(dto.email_template.id, dto.email_template.name);
            //     record.schedule = new Ref(dto.interval.id, dto.interval.name);
            //     record.redirectPage = new Ref(dto.redirect_page.id, dto.redirect_page.name);
            //     record.emailServer = new Ref(dto.email_server.id, dto.email_server.host);
            //     record.phishingDomain = new Ref(dto.domain.id, dto.domain.domain_name);
            //     record.state = dto.state;
            //     record.path = dto.path;
            //     record.name = dto.name;
            //     record.description = dto.description;
            //     record.id = dto.id;
            //     record.targetLists = dto.target_lists.map(list => {
            //         return new Ref(list.id, list.nickname);
            //     })
            //     record.clientId = dto.campaign.client.id;

            //     return record;
            // })

            dispatch({
                type: ActionType.CRUD_INIT,
                payload: state,
                context: this.qualifier
            });
        });
    }

    public openEdit(id: number): Function {
        return (dispatch) => {
            dispatch({
                type: ActionType.CRUD_OPEN_EDIT,
                payload: id,
                context: this.qualifier
            });
        }
    }

    //call target_list v2 to get target_list with client.id = 

    // public selectCampaign(id: number): Promise<Ref[]> {
    //     return new CampaignService()
    //     .getSuggestions()
    //     .then(suggestions => {
    //         dispatch({
    //             type: ActionType.UPDATE_TARGET_LIST_WIDGET,
    //             payload: suggestions.campaigns.
    //         })

    //         return suggestions.campaigns.map(suggestion => ({
    //             id: suggestion.id,
    //             text: suggestion.name
    //         }))
    //     });
    // }

    public openAdd(): Function {
        return (dispatch) => {
            dispatch({
                type: ActionType.CRUD_OPEN_ADD,
                context: this.qualifier
            });
        }
    }

    public filterByClient(id: number): Function {
        if(!id) return this.fetch();

        return (dispatch) => 
        new EngagementService().filterByClient(id)
        .then(dtos => {
            const state = EngagementMapper.toState(dtos);

            dispatch({
                type: ActionType.CRUD_INIT,
                payload: state,
                context: this.qualifier
            });
        });
    }

    public previewEmailForEngagement(id: number): Promise<string> {
        return new VectorEmailService()
        .getVectorEmailForEngagement(id)
        .then(result => {
            return new PreviewService().previewEmail(result.id);
        });
    }

    public previewLandingPage(id: number): Promise<string> {
        return new PreviewService().previewLandingPage(id);
    }

    public previewRedirectPage(id: number): Promise<string> {
        return new PreviewService().previewRedirectPage(id);
    }

    public togglePreview(record?: EngagementRecord): Function {
        return (dispatch) => {
            dispatch({
                type: ActionType.ENGAGEMENT_TOGGLE_PREVIEW,
                payload: record,
                // context: this.qualifier
            });    
        }
    }

    public confirmStart(record: EngagementRecord): Function {
        return (dispatch) => {
            dispatch({
                type: ActionType.ENGAGEMENT_CONFIRM_START,
                payload: record,
                // context: this.qualifier
            });    
        }
    }

    public start(id: number): Function {
        return(dispatch) => {
            new EngagementService()
            .start(id)
            .then(dto => {
                dispatch({
                    type: ActionType.ENGAGEMENT_START,
                    payload: dto.state,
                    context: this.qualifier
                });
            });    
        }
    }

    public stop(id: number): Function {
        return(dispatch) => {
            new EngagementService()
            .stop(id)
            .then(dto => {
                dispatch({
                    type: ActionType.ENGAGEMENT_STOP,
                    payload: dto.state,
                    context: this.qualifier
                });
            });    
        }
    }
}

export default new EngagementAction();