import CommitableDto from '../CommitableDto';
import ScraperUserAgentDto from './ScraperUserAgentDto';

interface LandingPageDto extends CommitableDto {
    status: number,
    name: string,
    url: string,
    is_redirect_page: boolean,
    page_type: string,
    path: string,
    scraper_user_agent: ScraperUserAgentDto,
    date_created: string
}

export default LandingPageDto;