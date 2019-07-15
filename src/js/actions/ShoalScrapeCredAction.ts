import ActionCreator from './ActionCreator';
import ShoalScrapeCredService from '../service/ShoalScrapeCredService';
import ScraperUserAgentService from '../service/ScraperUserAgentService';
import ShoalScrapeCredMapper from '../mappers/ShoalScrapeCredMapper';
import { ActionType } from './ActionType';
import Ref from '../model/state/Ref';

class ShoalScrapeCredAction extends ActionCreator<ShoalScrapeCredService> {
    private static QUALIFIER = 'shoalScrapeCred';

    constructor() {
        super(ShoalScrapeCredService, ShoalScrapeCredMapper, ShoalScrapeCredAction.QUALIFIER)
    }

    public getScraperUserAgentSuggestions(dispatch): void {
        dispatch({
            type: ActionType.SCRAPER_USER_AGENT_SUGGESTIONS_LOADING,
            context: ShoalScrapeCredAction.QUALIFIER
        });

        new ScraperUserAgentService()
        .getSuggestions()
        .then(suggestions => {
            const mapped: Ref[] = suggestions.scraper_user_agents.map(suggestion => ({
                id: suggestion.id,
                text: suggestion.name
            }))

            dispatch({
                type: ActionType.SCRAPER_USER_AGENT_SUGGESTIONS_POPULATED,
                payload: mapped,
                context: ShoalScrapeCredAction.QUALIFIER
            });
        })
    }
}

export default new ShoalScrapeCredAction();