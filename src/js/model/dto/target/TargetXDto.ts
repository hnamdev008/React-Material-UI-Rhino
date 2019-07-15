import PagedDto from '../PagedDto'
import TargetDto from './TargetDto';

interface TargetXDto extends PagedDto {
    targets: TargetDto[];
}

export default TargetXDto;

