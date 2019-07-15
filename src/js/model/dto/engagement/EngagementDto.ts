import CommitableDto from '../CommitableDto';

interface EngagementDto extends CommitableDto {
    "landing_page": number,
    "domain": number,
    "description": string,
    "campaign": number,
    "email_template": number,
    "interval": number,
    "redirect_page": number,
    "target_lists": number[],
    "state": number,
    "path": string,
    "email_server": number,
    "name": string
}

export default EngagementDto; 