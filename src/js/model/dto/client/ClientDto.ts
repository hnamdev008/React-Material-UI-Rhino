import CommitableDto from '../CommitableDto';

interface ClientDto extends CommitableDto {
    "url": string,
    "default_time_zone": string,
    "name": string
}

export default ClientDto;