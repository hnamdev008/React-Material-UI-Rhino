import Record from '../Record';
import Ref from '../Ref';

class LandingPageRecord implements Record {
    status: number //TODO enum,
    name: string
    url: string
    isRedirectPage: boolean
    pageType: 'Scraped Page' | 'Manual'
    path: string
    scraperUserAgent = new Ref();
    dateCreated: string
    id: number
    source: string
}

export default LandingPageRecord