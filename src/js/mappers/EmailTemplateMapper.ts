import Mapper from './Mapper';
import EmailTemplateXDto from '../model/dto/emailTemplate/EmailTemplateXDto';
import EmailTemplateDto from '../model/dto/emailTemplate/EmailTemplateDto';
import EmailTemplateState from '../model/state/emailTemplate/EmailTemplateState';
import EmailTemplateRecord from '../model/state/emailTemplate/EmailTemplateRecord';

class EmailTemplateMapperStatic implements Mapper { 
    toState(result: EmailTemplateXDto): EmailTemplateState {
        const state = new EmailTemplateState();

        state.records = result.email_templates.map(dto => {             
            return {
                subjectHeader: dto.subject_header,
                fromHeader: dto.from_header,
                template: dto.template,
                name: dto.name,
                id: dto.id
            }
            
        });        

        return state;
    }

    toForm(dto: EmailTemplateDto) {
        return {
            subjectHeader: dto.subject_header,
            fromHeader: dto.from_header,
            template: dto.template,
            name: dto.name,
            id: dto.id
        }
    }

    toDto(state: EmailTemplateRecord): EmailTemplateDto {
        return {
            "subject_header": state.subjectHeader,
            "from_header": state.fromHeader,
            "template": state.template,
            "name": state.name,    
            id: state.id,
            commit: true      
        }
    }
}
const EmailTemplateMapper = new EmailTemplateMapperStatic();
export default EmailTemplateMapper;