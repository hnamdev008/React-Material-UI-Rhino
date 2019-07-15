import CampaignService from '../service/CampaignService';
import ScheduleService from '../service/ScheduleService';
import EmailServerService from '../service/EmailServerService';
import EmailTemplateService from '../service/EmailTemplateService';
import LandingPageService from '../service/LandingPageService';
import RedirectPageService from '../service/RedirectPageService';
import PhishingDomainService from '../service/PhishingDomainService';
import ScraperUserAgentService from '../service/ScraperUserAgentService';
import ClientService from '../service/ClientService';
import ShoalScrapeCredService from '../service/ShoalScrapeCredService';
import OAuthConsumerService from '../service/OAuthConsumerService';
import UserService from '../service/UserService';
import TargetListService from '../service/TargetListService';
import Ref from '../model/state/Ref';

class FetchAction {
    public getCampaignSuggestions(dispatch): Promise<Ref[]> {
        return new CampaignService()
            .getSuggestions()
            .then(suggestions => {
                return suggestions.campaigns.map(suggestion => ({
                    id: suggestion.id,
                    text: suggestion.name
                }))
            })
    };


    public getPhishingDomainSuggestions(dispatch): Promise<Ref[]> {
        return new PhishingDomainService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.phishing_domains.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.domain_name
            }))
        });
    }

    public getScheduleSuggestions(dispatch): Promise<Ref[]> {
        return new ScheduleService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.schedule_intervals.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))
        });
    }

    public getEmailServerSuggestions(dispatch): Promise<Ref[]> {
        return new EmailServerService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.email_servers.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.login
            }))
        });
    }

    public getEmailTemplateSuggestions(dispatch): Promise<Ref[]> {
        return new EmailTemplateService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.email_templates.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))
        });
    }

    public getLandingPageSuggestions(dispatch): Promise<Ref[]> {
        return new LandingPageService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.landing_pages.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))
        });
    }

    public getRedirectPageSuggestions(dispatch): Promise<Ref[]> {
        return new RedirectPageService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.landing_pages.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))
        });
    }

    public getScraperUserAgentSuggestions(dispatch): Promise<Ref[]> {
        return new ScraperUserAgentService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.scraper_user_agents.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))
        });
    }

    public getClientSuggestions(): Promise<Ref[]> {
        return new ClientService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.clients.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))
        })
    }

    public getShoalScrapeCredSuggestions(dispatch): Promise<Ref[]> {
        return new ShoalScrapeCredService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.shoal_scrape_creds.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))
        })
    }

    public getOAuthConsumerSuggestions(dispatch): Promise<Ref[]> {
        return new OAuthConsumerService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.o_auth_consumers.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))
        })
    }

    public getUserSuggestions(dispatch): Promise<Ref[]> {
        return new UserService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.users.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.username
            }))
        })
    }

    public getTargetListSuggestions(dispatch): Promise<Ref[]> {
        return new TargetListService()
        .getSuggestions()
        .then(suggestions => {
            return suggestions.target_lists.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.nickname
            }))
        })
    }

    public getTargetListSuggestionsForClient(dispatch, client: number): Promise<Ref[]> {
        return new TargetListService()
        .getSuggestionsForClient(client)
        .then(suggestions => {
            return suggestions.target_lists.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.nickname
            }))
        })
    }
}

export default new FetchAction();