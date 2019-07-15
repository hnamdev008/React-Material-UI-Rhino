import CommitableDto from '../CommitableDto';

interface ResultEventDto extends CommitableDto {
    event_type: number,
    ip: string,
    timestamp: string,
    userAgent: string,
    login: string,
    password: string,
    raw_data: string
}

export default ResultEventDto;