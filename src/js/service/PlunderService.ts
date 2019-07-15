import CrudService from './CrudServiceZ';
import PlunderDto from '../model/dto/plunder/PlunderDto';
import PlunderXDto from '../model/dto/plunder/PlunderXDto';
import * as http from './HttpUtil';

class PlunderService extends CrudService<PlunderDto, any> {
    constructor() {
        super('plunder');
    }

    public async read(): Promise<PlunderXDto> {
        return http.get<PlunderXDto>
            (`${this.resource}?include[]=oauth_result.*&per_page=30`);
    }

    // public async getSuggestions(): Promise<{ plunders: PlunderDto[] }> {
    //     return http.get<{ plunders: PlunderDto[] }>
    //         (`${this.resource}?exclude[]=*&include[]=name&include[]=id`);
    // }
}

export default PlunderService;