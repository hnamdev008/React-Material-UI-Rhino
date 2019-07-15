import CommitableDto from '../CommitableDto';

interface LandingPageDto extends CommitableDto {
    "status": number,
    "name": string,
    "url": string,
    "is_redirect_page": boolean,
    "page_type": any,
    "path": string,
    "scraper_user_agent": number,
    "date_created": string,
    source: string
}

export default LandingPageDto;