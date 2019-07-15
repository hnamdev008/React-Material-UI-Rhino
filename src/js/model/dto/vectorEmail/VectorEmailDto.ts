import CommitableDto from '../CommitableDto';
import TargetDto from '../target/TargetDto';
import EngagementDto from '../engagement/EngagementDto';

interface VectorEmailDto extends CommitableDto {
    target: TargetDto,
    engagement: EngagementDto,
    state: number,
    send_at: string,
    result_event: number[],
    error: string,
    sent_timestamp: string
}

export default VectorEmailDto;