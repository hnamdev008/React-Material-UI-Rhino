import PagedDto from '../PagedDto'
import TargetDataDto from './TargetDataDto';
import TargetListDto from '../targetList/TargetListDto';

interface TargetDataXDto extends PagedDto {
    target_data: TargetDataDto[];
    target_lists: TargetListDto[];
}

export default TargetDataXDto;

