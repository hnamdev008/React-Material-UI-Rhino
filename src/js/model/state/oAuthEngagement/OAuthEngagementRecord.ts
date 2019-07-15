import Record from '../Record';
import Ref from '../Ref';

class OAuthEngagementRecord implements Record {
    id: number
    name: string
    oAuthConsumer = new Ref()
    description: string
    campaign = new Ref()
    emailTemplate = new Ref()
    schedule = new Ref()
    targetLists = new Array<Ref>(); 
    state: number
    emailServer = new Ref()
}

export default OAuthEngagementRecord