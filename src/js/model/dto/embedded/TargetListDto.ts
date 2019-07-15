import CommitableDto from '../CommitableDto';
import ClientDto from './ClientDto';
import TargetDto from './TargetDto';

interface TargetListDto extends CommitableDto {
    description: string,
    client: ClientDto,
    nickname: string,
    target: TargetDto[]
}

export default TargetListDto;