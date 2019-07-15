import Record from '../Record';
import Ref from '../Ref';

class OAuthConsumerRecord implements Record {
    id: number
    name: string
    bounceUrl: string
    clientId: string
    clientSecret: string
    scope: string
    callbackUrl: string
    description: string
}

export default OAuthConsumerRecord