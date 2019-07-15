import PagedDto from '../PagedDto'
import ShoalScrapeCredDto from '../shoalScrapeCred/ShoalScrapeCredDto';
import ShoalScrapeTaskDto from './ShoalScrapeTaskDto';

interface ShoalScrapeTaskXDto extends PagedDto {
    shoal_scrape_tasks: ShoalScrapeTaskDto[];
    shoal_scrape_creds: ShoalScrapeCredDto[];
}

export default ShoalScrapeTaskXDto;

