import CrudService from './CrudServiceZ';
import ScheduleDto from '../model/dto/schedule/ScheduleDto';
import * as http from './HttpUtil';

class ScheduleService extends CrudService<ScheduleDto, any> {
    constructor() {
        super('schedule-intervals');
    }

    public async getSuggestions(): Promise<{ schedule_intervals: ScheduleDto[] }> {
        return http.get<{ schedule_intervals: ScheduleDto[] }>
            (`${this.resource}?exclude[]=*&include[]=name&include[]=id&per_page=30`);
    }
}

export default ScheduleService;