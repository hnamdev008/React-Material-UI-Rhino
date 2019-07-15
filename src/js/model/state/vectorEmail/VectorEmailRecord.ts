import Record from '../Record';
import Ref from '../Ref';

class VectorEmailRecord implements Record {
    state: number
    client: string
    campaign: string
    engagement: string
    target: string
    targetList: string
    scheduleSending: string
    targetTimezone: string
    id: number
}

// target = new Ref()
// engagement = new Ref()
// state: number
// sendAt: string
// resultEvent = new Array<Ref>();
// error: string
// sentTimestamp: string
// id: number

export default VectorEmailRecord