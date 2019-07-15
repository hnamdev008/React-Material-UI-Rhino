import CrudService from './CrudServiceZ';
import EmailServerDto from '../model/dto/emailServer/EmailServerDto';
import * as http from './HttpUtil';

class EmailServerService extends CrudService<EmailServerDto, any> {
    constructor() {
        super('email-servers');
    }

    public async getSuggestions(): Promise<{ email_servers: EmailServerDto[] }> {
        return http.get<{ email_servers: EmailServerDto[] }>
            (`${this.resource}?exclude[]=*&include[]=login&include[]=id&per_page=30`);
    }

    public async checkEmail(dto: EmailServerDto): Promise<{ error_message: string, success: boolean }> {
        return http.post<any>
            (`${this.resource}email-check`, dto);
    }
}

export default EmailServerService;