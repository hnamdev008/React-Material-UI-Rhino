import CommitableDto from '../CommitableDto';

interface OAuthEngagementDto extends CommitableDto {
    "oauth_consumer": number,
    "description": string,
    "campaign": number,
    "email_template": number,
    "interval": number,
    "target_lists": number[],
    "state": number,
    "email_server": number,
    "name": string
}

export default OAuthEngagementDto; 