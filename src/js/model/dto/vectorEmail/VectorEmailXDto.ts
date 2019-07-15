import PagedDto from '../PagedDto'
import VectorEmailDto from './VectorEmailDto';
import EngagementDto from '../engagement/EngagementDto';
import ResultEventDto from '../resultEvent/ResultEventDto';
import TargetDto from '../target/TargetDto';

interface VectorEmailXDto extends PagedDto {
    vector_emails: VectorEmailDto[];
    engagements: EngagementDto[];
    result_events: ResultEventDto[];
    targets: TargetDto[];
}

export default VectorEmailXDto;

