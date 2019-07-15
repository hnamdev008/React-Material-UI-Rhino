import CrudService from './CrudServiceZ';
import ShoalScrapeTaskDto from '../model/dto/shoalScrapeTask/ShoalScrapeTaskDto';
import ShoalScrapeTaskXDto from '../model/dto/shoalScrapeTask/ShoalScrapeTaskXDto';
import * as http from './HttpUtil';

class ShoalScrapeTaskService extends CrudService<ShoalScrapeTaskDto, any> {
    constructor() {
        super('shoalscrape-tasks');
    }

    public async read(): Promise<ShoalScrapeTaskXDto> {
        return http.get<ShoalScrapeTaskXDto>
            (`${this.resource}?include[]=shoalscrape_creds.*&per_page=30`);
    }
}

export default ShoalScrapeTaskService;