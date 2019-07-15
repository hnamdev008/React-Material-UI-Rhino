import CommitableDto from '../CommitableDto';
import TargetDto from './TargetDto';
import EngagementDto from './EngagementDto';
import EmailServerDto from './EmailServerDto';
import ResultEventDto from './ResultEventDto';

interface VectorEmailDto extends CommitableDto {
    target: TargetDto,
    engagement: EngagementDto,
    state: number,
    send_at: string,
    result_event: ResultEventDto[],
    error: string,
    sent_timestamp: string
}

export default VectorEmailDto;