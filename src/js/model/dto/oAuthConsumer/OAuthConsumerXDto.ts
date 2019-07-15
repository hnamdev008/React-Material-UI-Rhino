import PagedDto from '../PagedDto'
import OAuthConsumerDto from './OAuthConsumerDto';

interface OAuthConsumerXDto extends PagedDto {
    o_auth_consumers: OAuthConsumerDto[];
}

export default OAuthConsumerXDto;