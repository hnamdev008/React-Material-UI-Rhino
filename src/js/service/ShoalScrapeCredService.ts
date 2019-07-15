import CrudService from './CrudServiceZ';
import ShoalScrapeCredDto from '../model/dto/shoalScrapeCred/ShoalScrapeCredDto';
import ShoalScrapeCredXDto from '../model/dto/shoalScrapeCred/ShoalScrapeCredXDto';
import * as http from './HttpUtil';

class ShoalScrapeCredService extends CrudService<ShoalScrapeCredDto, any> {
    constructor() {
        super('shoalscrape-creds');
    }

    public async read(): Promise<ShoalScrapeCredXDto> {
        return http.get<ShoalScrapeCredXDto>
            (`${this.resource}?include[]=scraper_user_agent.*`);
    }

    public async getSuggestions(): Promise<{ shoal_scrape_creds: ShoalScrapeCredDto[] }> {
        return http.get<{ shoal_scrape_creds: ShoalScrapeCredDto[] }>
            (`${this.resource}?exclude[]=*&include[]=name&include[]=id&per_page=30`);
    }
}

export default ShoalScrapeCredService;