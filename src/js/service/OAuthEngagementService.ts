import CrudService from './CrudServiceZ';
import OAuthEngagementDto from '../model/dto/oAuthEngagement/OAuthEngagementDto';
import OAuthEngagementXDto from '../model/dto/oAuthEngagement/OAuthEngagementXDto';
import * as http from './HttpUtil';

class OAuthEngagementService extends CrudService<OAuthEngagementDto, any> {
    constructor() {
        super('oauth-engagements');
    }

    public async read(): Promise<OAuthEngagementXDto> {
        return http.get<OAuthEngagementXDto>
            (`${this.resource}?include[]=oauth_consumer.*&include[]=campaign.*&include[]=email_template.*&include[]=interval.*&include[]=target_lists.*&include[]=email_server.*`);
    }

    public async getSuggestions(): Promise<{ o_auth_engagements: OAuthEngagementDto[] }> {
        return http.get<{ o_auth_engagements: OAuthEngagementDto[] }>
            (`${this.resource}?exclude[]=*&include[]=name&include[]=id`);
    }
}

export default OAuthEngagementService;