import ActionCreator from './ActionCreator';
import OAuthEngagementService from '../service/OAuthEngagementService';
import CampaignService from '../service/CampaignService';
import ScheduleService from '../service/ScheduleService';
import EmailServerService from '../service/EmailServerService';
import OAuthConsumerService from '../service/OAuthConsumerService';
import EmailTemplateService from '../service/EmailTemplateService';
import OAuthEngagementMapper from '../mappers/OAuthEngagementMapper';
import { ActionType } from './ActionType';
import Ref from '../model/state/Ref';

class OAuthEngagementAction extends ActionCreator<OAuthEngagementService> {
    private static QUALIFIER = 'oAuthEngagement';

    constructor() {
        super(OAuthEngagementService, OAuthEngagementMapper, OAuthEngagementAction.QUALIFIER)
    }

    public getCampaignSuggestions(dispatch): void {
        dispatch({
            type: ActionType.CAMPAIGN_SUGGESTIONS_LOADING,
            context: OAuthEngagementAction.QUALIFIER
        });

        new CampaignService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.campaigns.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))

            dispatch({
                type: ActionType.CAMPAIGN_SUGGESTIONS_POPULATED,
                payload: mapped,
                context: OAuthEngagementAction.QUALIFIER
            });
        })
    }

    public getOAuthConsumerSuggestions(dispatch): void {
        dispatch({
            type: ActionType.O_AUTH_CONSUMER_SUGGESTIONS_LOADING,
            context: OAuthEngagementAction.QUALIFIER
        });

        new OAuthConsumerService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.o_auth_consumers.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))

            dispatch({
                type: ActionType.O_AUTH_CONSUMER_SUGGESTIONS_POPULATED,
                payload: mapped,
                context: OAuthEngagementAction.QUALIFIER
            });
        })
    }

    public getScheduleSuggestions(dispatch): void {
        dispatch({
            type: ActionType.SCHEDULE_SUGGESTIONS_LOADING,
            context: OAuthEngagementAction.QUALIFIER
        });

        new ScheduleService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.schedule_intervals.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))

            dispatch({
                type: ActionType.SCHEDULE_SUGGESTIONS_POPULATED,
                payload: mapped,
                context: OAuthEngagementAction.QUALIFIER
            });
        })
    }

    public getEmailServerSuggestions(dispatch): void {
        dispatch({
            type: ActionType.EMAIL_SERVER_SUGGESTIONS_LOADING,
            context: OAuthEngagementAction.QUALIFIER
        });

        new EmailServerService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.email_servers.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.login
            }))

            dispatch({
                type: ActionType.EMAIL_SERVER_SUGGESTIONS_POPULATED,
                payload: mapped,
                context: OAuthEngagementAction.QUALIFIER
            });
        })
    }

    public getEmailTemplateSuggestions(dispatch): void {
        dispatch({
            type: ActionType.EMAIL_TEMPLATE_SUGGESTIONS_LOADING,
            context: OAuthEngagementAction.QUALIFIER
        });

        new EmailTemplateService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.email_templates.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))

            dispatch({
                type: ActionType.EMAIL_TEMPLATE_SUGGESTIONS_POPULATED,
                payload: mapped,
                context: OAuthEngagementAction.QUALIFIER
            });
        })
    }
}

export default new OAuthEngagementAction();