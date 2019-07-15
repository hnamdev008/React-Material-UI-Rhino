import { Service } from './Service';
import * as http from './HttpUtil';
import VectorEmailDto from '../model/dto/embedded/VectorEmailDto'

class VectorEmailService extends Service {
    private url: string;

    constructor() {
        super();
        this.url = `${this.baseServiceUrl()}`;
    }

    public async read(): Promise<{ vector_emails: VectorEmailDto[] }> {
        return await http.get<any>
                    (`${this.url}/v2/vector-emails/`);
    }

    public async getVectorEmailForEngagement(engagementId: number): Promise<{ id: number }> {
        return http.get<{ vector_emails: { id: number}[] }>
            (`${this.url}/v1/vector-emails/?exclude[]=*&include[]=id&filter{engagement}=${engagementId}`)
            .then(result => {
                return result.vector_emails[0];
            });  
    }
}

export default VectorEmailService;