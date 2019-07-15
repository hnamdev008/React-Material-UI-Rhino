import Mapper from './Mapper';
import ScheduleXDto from '../model/dto/schedule/ScheduleXDto';
import ScheduleDto from '../model/dto/schedule/ScheduleDto';
import ScheduleState from '../model/state/schedule/ScheduleState';
import ScheduleRecord from '../model/state/schedule/ScheduleRecord';

class ScheduleMapperStatic implements Mapper { 
    toState(result: ScheduleXDto): ScheduleState {
        const state = new ScheduleState();

        state.records = result.schedule_intervals.map(dto => {             
            return {
                startType: dto.start_type,
                startAt: dto.start_at,
                name: dto.name,
                batchInterval: dto.batch_interval,
                timeBetweenBatches: dto.time_between_batches,
                batchSize: dto.batch_size,
                id: dto.id
            }
        });        

        return state;
    }

    toForm(dto: ScheduleDto) {
        return {
            startType: dto.start_type,
            startAt: dto.start_at,
            name: dto.name,
            batchInterval: dto.batch_interval,
            timeBetweenBatches: dto.time_between_batches,
            batchSize: dto.batch_size,
            id: dto.id
        }
    }

    toDto(state: ScheduleRecord): ScheduleDto {
        return {
            "start_type": state.startType,
            "start_at": state.startAt,
            "name": state.name,
            "batch_interval": state.batchInterval,
            "time_between_batches": state.timeBetweenBatches,
            "batch_size": state.batchSize,
            commit: true,
            id: state.id           
        }
    }
}
const ScheduleMapper = new ScheduleMapperStatic();
export default ScheduleMapper;