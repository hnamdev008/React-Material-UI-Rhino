import CommitableDto from '../CommitableDto';

interface ShoalScrapeCredDto extends CommitableDto {
    "username": string,
    "scraper_user_agent": number,
    "password": string,
    "id": number,
    "name": string
}

export default ShoalScrapeCredDto;