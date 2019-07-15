import PagedDto from '../PagedDto'
import ScraperUserAgentDto from './ScraperUserAgentDto';

interface ScraperUserAgentXDto extends PagedDto {
    scraper_user_agents: ScraperUserAgentDto[];
}

export default ScraperUserAgentXDto;

