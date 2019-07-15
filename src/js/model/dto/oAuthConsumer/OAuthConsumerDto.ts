import CommitableDto from '../CommitableDto';

interface OAuthConsumerDto extends CommitableDto {
    "description": string,
    "bounce_url": string,
    "client_id": string,
    "client_secret": string,
    "scope": string,
    "callback_url": string,
    "name": string
}

export default OAuthConsumerDto;