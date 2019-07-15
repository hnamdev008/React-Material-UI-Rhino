import CommitableDto from '../CommitableDto';

interface TargetDto extends CommitableDto {
    description: string,
    client: {
        id: number,
        name: string
    },
    nickname: string,
    target: { id: number, email: string }[]
}

export default TargetDto;
