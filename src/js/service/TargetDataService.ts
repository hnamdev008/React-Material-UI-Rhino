import CrudService from './CrudServiceZ';
import TargetDataDto from '../model/dto/targetData/TargetDataDto';
import TargetDataXDto from '../model/dto/targetData/TargetDataXDto';
import * as http from './HttpUtil';

class TargetDataService extends CrudService<TargetDataDto, any> {
    constructor() {
        super('target-data');
    }

    public async read(): Promise<TargetDataXDto> {
        return http.get<TargetDataXDto>
            (`${this.resource}?include[]=target_list.*`);
    }
}

export default TargetDataService;