import PagedDto from '../PagedDto'
import ClientDto from './ClientDto';

interface ClientXDto extends PagedDto {
    clients: ClientDto[];
}

export default ClientXDto;

