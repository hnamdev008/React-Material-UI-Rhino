import Record from '../Record';
import Ref from '../Ref';

class ScheduleRecord implements Record {
    startType: 'now' | 'after_time'
    startAt: string
    name: string
    batchInterval: number
    timeBetweenBatches: number
    batchSize: number
    id: number
}

export default ScheduleRecord