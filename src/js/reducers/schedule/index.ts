import reduce from '../common';
import ScheduleState from '../../model/state/schedule/ScheduleState'
import ScheduleRecord from '../../model/state/schedule/ScheduleRecord'

export default reduce(new ScheduleState(), new ScheduleRecord());