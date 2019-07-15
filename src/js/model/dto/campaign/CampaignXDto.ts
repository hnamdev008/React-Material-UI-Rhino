import PagedDto from '../PagedDto'
import CampaignDto from './CampaignDto';
import ClientDto from '../client/ClientDto';

interface CampaignXDto extends PagedDto {
    campaigns: CampaignDto[];
    clients: ClientDto[];
}

export default CampaignXDto;

