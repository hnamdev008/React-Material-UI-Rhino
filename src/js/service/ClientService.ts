import CrudService from './CrudServiceZ';
import ClientDto from '../model/dto/client/ClientDto';
import * as http from './HttpUtil';

class ClientService extends CrudService<ClientDto, any> {
    constructor() {
        super('clients');
    }

    public async getSuggestions(): Promise<{ clients: ClientDto[] }> {
        return http.get<{ clients: ClientDto[] }>
            (`${this.resource}?exclude[]=*&include[]=name&include[]=id&per_page=30`);
    }
}

export default ClientService;