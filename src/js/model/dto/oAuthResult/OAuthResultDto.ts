import CommitableDto from '../CommitableDto';

interface OAuthResultDto extends CommitableDto {
    "target": number,
    "timestamp": string,
    "ip": string,
    "email": string,
    "oauth_engagement": number,
    "userAgent": string,
    "consumer": number,
}

export default OAuthResultDto;