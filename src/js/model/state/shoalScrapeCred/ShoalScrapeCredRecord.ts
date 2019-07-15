import Record from '../Record';
import Ref from '../Ref';

class ShoalScrapeCredRecord implements Record {
    username: string
    scraperUserAgent = new Ref();
    password: string
    name: string
    id: number
}

export default ShoalScrapeCredRecord