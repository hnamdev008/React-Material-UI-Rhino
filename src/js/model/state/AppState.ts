import { MenuState } from '../state/menu/MenuState';
import ClientState from '../state/client/ClientState';
import UserState from '../state/user/UserState';
import CampaignState from '../state/campaign/CampaignState';
import EmailServerState from '../state/emailServer/EmailServerState';
import PhishingDomainState from '../state/phishingDomain/PhishingDomainState';
import LandingPageState from '../state/landingPage/LandingPageState';
import ScheduleState from '../state/schedule/ScheduleState';
import ProfileState from '../state/profile/ProfileState';
import EngagementState from '../state/engagement/EngagementState';
import TargetListState from '../state/targetList/TargetListState';
import LoginState from '../state/login/LoginState';
import RedirectPageState from '../state/redirectPage/RedirectPageState';
import EmailTemplateState from '../state/emailTemplate/EmailTemplateState';
import ScraperUserAgentState from '../state/scraperUserAgent/ScraperUserAgentState';
import ShoalScrapeCredState from '../state/shoalScrapeCred/ShoalScrapeCredState';
import ShoalScrapeTaskState from '../state/shoalScrapeTask/ShoalScrapeTaskState';
import OAuthConsumerState from '../state/oAuthConsumer/OAuthConsumerState';
import OAuthEngagementState from '../state/oAuthEngagement/OAuthEngagementState';
import OAuthResultState from '../state/oAuthResult/OAuthResultState';
import PlunderState from '../state/plunder/PlunderState';
import PreviewState from '../state/preview/PreviewState';
import VectorEmailState from '../state/vectorEmail/VectorEmailState';
import ResultEventState from '../state/resultEvent/ResultEventState';
import FeedbackState from './FeedbackState';

export interface AppState {
    navigation: MenuState
    user: UserState
    engagement: EngagementState
    client: ClientState
    campaign: CampaignState
    emailServer: EmailServerState
    phishingDomain: PhishingDomainState
    landingPage: LandingPageState
    redirectPage: RedirectPageState
    emailTemplate: EmailTemplateState
    schedule: ScheduleState
    login: LoginState
    profile: ProfileState
    scraperUserAgent: ScraperUserAgentState
    shoalScrapeCred: ShoalScrapeCredState
    shoalScrapeTask: ShoalScrapeTaskState
    oAuthConsumer: OAuthConsumerState
    oAuthEngagement: OAuthEngagementState
    oAuthResult: OAuthResultState
    plunder: PlunderState
    preview: PreviewState
    targetList: TargetListState
    vectorEmail: VectorEmailState
    feedback: FeedbackState
    resultEvent: ResultEventState
}
