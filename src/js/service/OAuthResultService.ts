import CrudService from './CrudServiceZ';
import OAuthResultDto from '../model/dto/oAuthResult/OAuthResultDto';
import OAuthResultXDto from '../model/dto/oAuthResult/OAuthResultXDto';
import * as http from './HttpUtil';

class OAuthResultService extends CrudService<OAuthResultDto, any> {
    constructor() {
        super('oauth-results');
    }

    public async read(): Promise<OAuthResultXDto> {
        return http.get<OAuthResultXDto>
            (`${this.resource}?include[]=oauth_engagement.*&include[]=consumer.*&include[]=target.*&per_page=30`);
    }

    public async getSuggestions(): Promise<{ o_auth_results: OAuthResultDto[] }> {
        return http.get<{ o_auth_results: OAuthResultDto[] }>
            (`${this.resource}?exclude[]=*&include[]=name&include[]=id&per_page=30`);
    }
}

export default OAuthResultService;