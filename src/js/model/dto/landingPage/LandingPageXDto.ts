import PagedDto from '../PagedDto'
import LandingPageDto from '../landingPage/LandingPageDto';
import ScraperUserAgentDto from '../scraperUserAgent/ScraperUserAgentDto';

interface LandingPageXDto extends PagedDto {
    landing_pages: LandingPageDto[];
    scraper_user_agent: ScraperUserAgentDto[];
}

export default LandingPageXDto;

