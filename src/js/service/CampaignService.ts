import CrudService from './CrudServiceZ';
import CampaignDto from '../model/dto/campaign/CampaignDto';
import CampaignXDto from '../model/dto/campaign/CampaignXDto';
import * as http from './HttpUtil';

class CampaignService extends CrudService<CampaignDto, any> {
    constructor() {
        super('campaigns');
    }

    public async read(): Promise<CampaignXDto> {
        return http.get<CampaignXDto>
            (`${this.resource}?include[]=client.*&per_page=30`);
    }

    public async getSuggestions(): Promise<{ campaigns: CampaignDto[] }> {
        return http.get<{ campaigns: CampaignDto[] }>
            (`${this.resource}?exclude[]=*&include[]=name&include[]=id&per_page=30`);
    }

    public async filterByClient(id: number): Promise<CampaignXDto> {
        return http.get<CampaignXDto>
            (`${this.resource}?filter{client}=${id}&?include[]=client.*&per_page=30`);
    }
}

export default CampaignService;