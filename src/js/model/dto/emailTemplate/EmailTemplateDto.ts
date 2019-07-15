import CommitableDto from '../CommitableDto';

interface EmailTemplateDto extends CommitableDto {
    "subject_header": string,
    "from_header": string,
    "template": string,
    "name": string
}

export default EmailTemplateDto;