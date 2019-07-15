import { CrudState } from '../model/state/CrudState';
import Record from '../model/state/Record';
import CommitableDto from '../model/dto/CommitableDto';
import PagedDto from '../model/dto/PagedDto';
import Dto from '../model/dto/Dto';

interface Mapper {
    toState(dto: PagedDto): CrudState;
    toForm(dto: any): any;
    toDto(state: Record): CommitableDto;
}

export default Mapper;