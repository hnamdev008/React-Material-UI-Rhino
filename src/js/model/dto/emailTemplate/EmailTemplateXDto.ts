import PagedDto from '../PagedDto'
import EmailTemplateDto from './EmailTemplateDto';

interface EmailTemplateXDto extends PagedDto {
    email_templates: EmailTemplateDto[];
}

export default EmailTemplateXDto;

