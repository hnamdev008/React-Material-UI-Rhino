import Mapper from './Mapper';
import OAuthConsumerXDto from '../model/dto/oAuthConsumer/OAuthConsumerXDto';
import OAuthConsumerDto from '../model/dto/oAuthConsumer/OAuthConsumerDto';
import OAuthConsumerState from '../model/state/oAuthConsumer/OAuthConsumerState';
import OAuthConsumerRecord from '../model/state/oAuthConsumer/OAuthConsumerRecord';

class OAuthConsumerMapperStatic implements Mapper { 
    toState(result: OAuthConsumerXDto): OAuthConsumerState {
        const state = new OAuthConsumerState();

        state.records = result.o_auth_consumers.map(dto => {             
            return {
                id: dto.id,
                name: dto.name,
                bounceUrl: dto.bounce_url,
                clientId: dto.client_id,
                clientSecret: dto.client_secret,
                scope: dto.scope,
                callbackUrl: dto.callback_url,
                description: dto.description
            }
            
        });        

        return state;
    }

    toForm(dto: OAuthConsumerDto) {
        return {
            id: dto.id,
            name: dto.name,
            bounceUrl: dto.bounce_url,
            clientId: dto.client_id,
            clientSecret: dto.client_secret,
            scope: dto.scope,
            callbackUrl: dto.callback_url,
            description: dto.description
        }
    }

    toDto(state: OAuthConsumerRecord): OAuthConsumerDto {
        return {
            "description": state.description,
            "bounce_url": state.bounceUrl,
            "client_id": state.clientId,
            "client_secret": state.clientSecret,
            "scope": state.scope,
            "callback_url": state.callbackUrl,
            "name": state.name,
            commit: true,
            id: state.id            
        }
    }
}
const OAuthConsumerMapper = new OAuthConsumerMapperStatic();
export default OAuthConsumerMapper;