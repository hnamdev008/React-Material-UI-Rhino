import CommitableDto from '../CommitableDto';

interface TargetDto extends CommitableDto {
    lastname: string,
    email: string,
    firstname: string,
    timezone: string
}

export default TargetDto;