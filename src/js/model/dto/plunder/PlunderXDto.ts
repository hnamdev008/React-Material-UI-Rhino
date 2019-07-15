import PagedDto from '../PagedDto'
import PlunderDto from './PlunderDto';
import OAuthResultDto from '../oAuthResult/OAuthResultDto';

interface PlunderXDto extends PagedDto {
    plunders: PlunderDto[];
    o_auth_results: OAuthResultDto[];
}

export default PlunderXDto;

