import PagedDto from '../PagedDto'
import ScheduleDto from './ScheduleDto';

interface ScheduleXDto extends PagedDto {
    schedule_intervals: ScheduleDto[];
}

export default ScheduleXDto;

