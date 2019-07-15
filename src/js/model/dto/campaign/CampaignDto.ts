import CommitableDto from '../CommitableDto';

interface CampaignDto extends CommitableDto {
    "client": number,
    "description": string,
    "name": string
}

export default CampaignDto;