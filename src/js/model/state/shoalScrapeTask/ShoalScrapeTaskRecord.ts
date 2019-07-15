import Record from '../Record';
import Ref from '../Ref';

class ShoalScrapeTaskRecord implements Record {
    shoalScrapeCreds = new Ref()
    company: string
    domain: string
    currentTaskId: number
    state: number
    lastStartedAt: string
    error: string
    path: string
    id: number
}

export default ShoalScrapeTaskRecord