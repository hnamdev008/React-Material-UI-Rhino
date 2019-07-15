import CommitableDto from '../CommitableDto';

interface DomainDto extends CommitableDto {
    domain_name: string
}

export default DomainDto;