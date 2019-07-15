import * as React from 'react'
import { App } from '../views/App';
import { Route } from 'react-router';
import UserRoot from '../views/user/UserRoot';
import ClientRoot from '../views/client/ClientRoot';
import EmailTemplateRoot from '../views/emailTemplate/EmailTemplateRoot';
import ProfileRoot from '../views/profile/ProfileRoot';
import CampaignRoot from '../views/campaign/CampaignRoot';
import ScheduleRoot from '../views/schedule/ScheduleRoot';
import EmailServerRoot from '../views/emailServer/EmailServerRoot';
import PhishingDomainRoot from '../views/phishingDomain/PhishingDomainRoot';
import ScraperUserAgentRoot from '../views/scraperUserAgent/ScraperUserAgentRoot';
import ShoalScrapeCredRoot from '../views/shoalScrapeCred/ShoalScrapeCredRoot';
import ShoalScrapeTaskRoot from '../views/shoalScrapeTask/ShoalScrapeTaskRoot';
import LandingPageRoot from '../views/landingPage/LandingPageRoot';
import RedirectPageRoot from '../views/redirectPage/RedirectPageRoot';
import OAuthConsumerRoot from '../views/oAuthConsumer/OAuthConsumerRoot';
import OAuthResultRoot from '../views/oAuthResult/OAuthResultRoot';
import OAuthEngagementRoot from '../views/oAuthEngagement/OAuthEngagementRoot';
import PlunderRoot from '../views/plunder/PlunderRoot';
import TargetListRoot from '../views/targetList/TargetListRoot';
import VectorEmailRoot from '../views/vectorEmail/VectorEmailRoot';
import LoginRoot from '../views/identity/LoginRoot';
import { Dir } from '../common/Constants';
import { permit } from '../security/RenderRules';
import { Role } from '../security/Role';
import EngagementRoot from '../views/engagement/EngagementRoot';

export const Routes = (
    <Route
        path={"/"}
        component={App}>
        <Route
            path={ Dir.LOGIN }
            component={LoginRoot}
        />
        <Route
            path={ Dir.EMAIL_TEMPLATES }
            component={EmailTemplateRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.ENGAGEMENTS }
            component={EngagementRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.USERS }
            component={UserRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.CLIENTS }
            component={ClientRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.CAMPAIGN }
            component={CampaignRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.SCHEDULE }
            component={ScheduleRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.EMAIL_SERVER }
            component={EmailServerRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.PHISHING_DOMAIN }
            component={PhishingDomainRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.LANDING_PAGES }
            component={LandingPageRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.REDIRECT_PAGES }
            component={RedirectPageRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.PROFILE }
            component={ProfileRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.SCRAPER_USER_AGENTS }
            component={ScraperUserAgentRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.SHOAL_SCRAPE_TASKS }
            component={ShoalScrapeTaskRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.SHOAL_SCRAPE_CREDS }
            component={ShoalScrapeCredRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.O_AUTH_RESULTS }
            component={OAuthResultRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.O_AUTH_ENGAGEMENTS }
            component={OAuthEngagementRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.O_AUTH_CONSUMERS }
            component={OAuthConsumerRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.PLUNDER }
            component={PlunderRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.TARGET_LISTS }
            component={TargetListRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
        <Route
            path={ Dir.VECTOR_EMAIL }
            component={VectorEmailRoot}
            onEnter={ () => permit(Role.AUTHENTICATED) }
        />
    </Route>

);



