import CommitableDto from '../CommitableDto';
import ClientDto from './ClientDto';

interface CampaignDto extends CommitableDto {
    url: string,
    client: ClientDto,
    description: string,
    name: string
}

export default CampaignDto;