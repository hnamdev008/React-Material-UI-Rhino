import Record from '../Record';
import Ref from '../Ref';

class ResultEventRecord implements Record {
    eventType: number
    ip: string
    timestamp: string
    userAgent: string
    login: string
    password: string
    rawData: string
    id: number
}

export default ResultEventRecord