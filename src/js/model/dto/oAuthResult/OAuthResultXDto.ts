import PagedDto from '../PagedDto'
import OAuthResultDto from './OAuthResultDto';
import OAuthEngagementDto from '../oAuthEngagement/OAuthEngagementDto';
import OAuthConsumerDto from '../oAuthConsumer/OAuthConsumerDto';
import TargetDto from '../target/TargetDto';

interface OAuthResultXDto extends PagedDto {
    o_auth_results: OAuthResultDto[];
    o_auth_engagements: OAuthEngagementDto[];
    o_auth_consumers: OAuthConsumerDto[];
    targets: TargetDto[];
}

export default OAuthResultXDto;

