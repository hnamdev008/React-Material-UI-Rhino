import CommitableDto from '../CommitableDto';

interface ShoalScrapeTaskDto extends CommitableDto {
        "domain": string,
        "shoalscrape_creds": number,
        "company": string,
        "current_task_id"?: number,
        "state"?: number,
        "last_started_at"?: string,
        "error"?: string,
        "path"?: string,
}

export default ShoalScrapeTaskDto;