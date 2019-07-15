import CrudService from './CrudServiceZ';
import TargetDto from '../model/dto/target/TargetDto';
import * as http from './HttpUtil';

class TargetService extends CrudService<TargetDto, any> {
    constructor() {
        super('targets');
    }

    public async getSuggestions(): Promise<{ targets: TargetDto[] }> {
        return http.get<{ targets: TargetDto[] }>
            (`${this.resource}?exclude[]=*&include[]=email&include[]=id`);
    }
}

export default TargetService;