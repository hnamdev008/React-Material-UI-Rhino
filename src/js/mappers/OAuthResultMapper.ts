import Mapper from './Mapper';
import OAuthResultXDto from '../model/dto/oAuthResult/OAuthResultXDto';
import OAuthResultDto from '../model/dto/oAuthResult/OAuthResultDto';
import OAuthResultState from '../model/state/oAuthResult/OAuthResultState';
import OAuthResultRecord from '../model/state/oAuthResult/OAuthResultRecord';
import { 
    refTarget,
    refOAuthEngagement,
    refConsumer
} from './common/AssemblyUtil';

class OAuthResultMapperStatic implements Mapper { 
    toState(result: OAuthResultXDto): OAuthResultState {
        const state = new OAuthResultState();

        state.records = result.o_auth_results.map(dto => {             
            return {
                target: refTarget(dto, result.targets),
                oAuthEngagement: refOAuthEngagement(dto, result.o_auth_engagements),
                consumer: refConsumer(dto, result.o_auth_consumers), 
                timestamp: dto.timestamp,
                email: dto.email,
                userAgent: dto.userAgent,
                ip: dto.ip,               
                id: dto.id
            }
            
        });        

        return state;
    }

    toForm(dto: OAuthResultDto) {
        return {
            target: dto.target,
            oAuthEngagement: dto.oauth_engagement,
            consumer: dto.consumer, 
            timestamp: dto.timestamp,
            email: dto.email,
            userAgent: dto.userAgent,
            ip: dto.ip,               
            id: dto.id
        }
    }

    toDto(state: OAuthResultRecord): OAuthResultDto {
        return {
            "target": state.target && state.target.id,
            "timestamp": state.timestamp,
            "ip": state.ip,
            "email": state.email,
            "oauth_engagement": state.oAuthEngagement && state.oAuthEngagement.id,
            "userAgent": state.userAgent,
            "consumer": state.consumer && state.consumer.id,
            commit: true,
            id: state.id            
        }
    }
}
const OAuthResultMapper = new OAuthResultMapperStatic();
export default OAuthResultMapper;