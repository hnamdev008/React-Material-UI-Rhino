import Record from '../Record';
import Ref from '../Ref';

class OAuthResultRecord implements Record {
    id: number
    ip: string
    target = new Ref();
    timestamp: string
    email: string
    oAuthEngagement = new Ref();
    userAgent: string
    consumer = new Ref();
}

export default OAuthResultRecord