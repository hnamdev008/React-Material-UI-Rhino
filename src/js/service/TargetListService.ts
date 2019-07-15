import CrudService from './CrudServiceZ';
import TargetListDto from '../model/dto/targetList/TargetListDto';
import TargetListXDto from '../model/dto/targetList/TargetListXDto';
import * as http from './HttpUtil';

class TargetListsService extends CrudService<TargetListDto, any> {
    constructor() {
        super('target-lists');
    }

    public async read(): Promise<{ target_lists: TargetListDto[] }> {
        return http.get<any>
            (`${this.resource}?exclude[]=client.*&include[]=client.name&include[]=client.id&exclude[]=target.*&include[]=target.id&include[]=target.email`);
    }

    public async uploadCsv(file): Promise< { target_list: TargetListDto }> {
        return http.upload<any>
            (`${this.resource}csv-file`, file);
    }

    public async getSuggestions(): Promise<{ target_lists: TargetListDto[] }> {
        return http.get<{ target_lists: TargetListDto[] }>
            (`${this.resource}?exclude[]=*&include[]=nickname&include[]=id`);
    }

    public async getSuggestionsForClient(id: number): Promise<{ target_lists: TargetListDto[] }> {
        return http.get<{ target_lists: TargetListDto[] }>
            (`${this.resource}?filter{client.id}=${id}&exclude[]=*&include[]=nickname&include[]=id&per_page=30`);
    }
}

export default TargetListsService;