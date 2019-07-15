import PagedDto from '../PagedDto'
import TargetListDto from './TargetListDto';
import TargetDto from '../target/TargetDto';

interface TargetListXDto extends PagedDto {
    target_lists: TargetListDto[];
    targets: TargetDto[];
}

export default TargetListXDto;

