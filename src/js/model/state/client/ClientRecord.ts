import Record from '../Record';
import Ref from '../Ref';

class ClientRecord implements Record {
    id: number
    name: string
    url: string
    timezone: string
}

export default ClientRecord