import PagedDto from '../PagedDto'
import RedirectPageDto from './RedirectPageDto';
import ScraperUserAgentDto from '../scraperUserAgent/ScraperUserAgentDto';

interface RedirectPageXDto extends PagedDto {
    landing_pages: RedirectPageDto[];
    scraper_user_agent: ScraperUserAgentDto[];
}

export default RedirectPageXDto;

