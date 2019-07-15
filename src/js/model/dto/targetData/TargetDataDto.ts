import CommitableDto from '../CommitableDto';

interface TargetDataDto extends CommitableDto {
    "target_list": number,
    "target": number,
    "value": string,
    "label": string
}

export default TargetDataDto;