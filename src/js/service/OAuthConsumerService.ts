import CrudService from './CrudServiceZ';
import OAuthConsumerDto from '../model/dto/oAuthConsumer/OAuthConsumerDto';
import * as http from './HttpUtil';

class OAuthConsumerService extends CrudService<OAuthConsumerDto, any> {
    constructor() {
        super('oauth-consumers');
    }

    public async getSuggestions(): Promise<{ o_auth_consumers: OAuthConsumerDto[] }> {
        return http.get<{ o_auth_consumers: OAuthConsumerDto[] }>
            (`${this.resource}?exclude[]=*&include[]=name&include[]=id&per_page=30`);
    }
}

export default OAuthConsumerService;