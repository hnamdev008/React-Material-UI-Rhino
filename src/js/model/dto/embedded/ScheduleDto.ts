import CommitableDto from '../CommitableDto';

interface DomainDto extends CommitableDto {
    start_type: 'now' | 'after_time',
    start_at: string,
    name: string,
    batch_interval: number,
    time_between_batches: number,
    batch_size: number
}

export default DomainDto;