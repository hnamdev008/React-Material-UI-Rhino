import CommitableDto from '../CommitableDto';

interface TargetListFlatViewDto extends CommitableDto {
    description: string,
    client: {
        id: number,
        name: string
    },
    nickname: string,
    target: { [key:string]: string }[]
}

export default TargetListFlatViewDto;