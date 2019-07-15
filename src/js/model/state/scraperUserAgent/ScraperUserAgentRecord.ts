import Record from '../Record';
import Ref from '../Ref';

class ScraperUserAgentRecord implements Record {
    name: string
    userAgentData: string
    id: number
}

export default ScraperUserAgentRecord