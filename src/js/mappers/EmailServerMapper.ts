import Mapper from './Mapper';
import EmailServerXDto from '../model/dto/emailServer/EmailServerXDto';
import EmailServerDto from '../model/dto/emailServer/EmailServerDto';
import EmailServerState from '../model/state/emailServer/EmailServerState';
import EmailServerRecord from '../model/state/emailServer/EmailServerRecord';

class EmailServerMapperStatic implements Mapper { 
    toState(result: EmailServerXDto): EmailServerState {
        const state = new EmailServerState();

        state.records = result.email_servers.map(dto => {             
            return {
                useTls: dto.use_tls,
                host: dto.host,
                login: dto.login,
                testRecipient: dto.test_recipient,
                password: dto.password,
                port: dto.port,
                id: dto.id
            }
            
        });        

        return state;
    }

    toForm(dto: EmailServerDto) {
        return {
            useTls: dto.use_tls,
            host: dto.host,
            login: dto.login,
            testRecipient: dto.test_recipient,
            password: dto.password,
            port: dto.port,
            id: dto.id
        }
    }

    toDto(state: EmailServerRecord): EmailServerDto {
        return {
            "use_tls": state.useTls,
            "host": state.host,
            "login": state.login,
            "test_recipient": state.testRecipient,
            "password": state.password,
            "port": state.port,
            commit: true,
            id: state.id           
        }
    }
}
const EmailServerMapper = new EmailServerMapperStatic();
export default EmailServerMapper;