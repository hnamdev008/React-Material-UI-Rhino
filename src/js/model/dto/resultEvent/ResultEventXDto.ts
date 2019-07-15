import PagedDto from '../PagedDto'
import ResultEventDto from './ResultEventDto';

interface ResultEventXDto extends PagedDto {
    result_events: ResultEventDto[];
}

export default ResultEventXDto;

