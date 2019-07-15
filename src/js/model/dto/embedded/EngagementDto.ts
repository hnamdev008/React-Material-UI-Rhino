import CommitableDto from '../CommitableDto';
import LandingPageDto from './LandingPageDto';
import DomainDto from './DomainDto';
import CampaignDto from './CampaignDto';
import EmailTemplateDto from './EmailTemplateDto';
import ScheduleDto from './ScheduleDto';
import RedirectPageDto from './RedirectPageDto';
import TargetListDto from './TargetListDto';
import EmailServerDto from './EmailServerDto';

interface EngagementDto extends CommitableDto {
    landing_page: LandingPageDto,
    domain: DomainDto,
    description: string,
    campaign: CampaignDto,
    email_template: EmailTemplateDto,
    interval: ScheduleDto,
    redirect_page: RedirectPageDto,
    target_lists: TargetListDto[],
    state: number,
    path: string,
    email_server: EmailServerDto,
    name: string
}

export default EngagementDto;