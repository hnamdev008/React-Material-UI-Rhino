import PagedDto from '../PagedDto'
import EmailServerDto from './EmailServerDto';

interface EmailServerXDto extends PagedDto {
    email_servers: EmailServerDto[];
}

export default EmailServerXDto;

