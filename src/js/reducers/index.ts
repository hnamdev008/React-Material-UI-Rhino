import { combineReducers } from 'redux'
import * as navigation from './navigation/Navigation'
import user from './user'
import client from './client'
import campaign from './campaign'
import schedule from './schedule'
import emailServer from './emailServer'
import phishingDomain from './phishingDomain'
import landingPages from './landingPages'
import redirectPages from './redirectPages'
import emailTemplate from './emailTemplate';
import login from './identity';
import profile from './profile';
import { AppState } from '../model/state/AppState'
import engagement from './engagement';
import scraperUserAgent from './scraperUserAgent';
import shoalScrapeCred from './shoalScrapeCred';
import shoalScrapeTask from './shoalScrapeTask';
import oAuthConsumer from './oAuthConsumer';
import oAuthEngagement from './oAuthEngagement';
import oAuthResult from './oAuthResult';
import plunder from './plunder';
import preview from './preview';
import targetList from './targetList';
import vectorEmail from '../ducks/VectorEmail';
import feedback from '../ducks/Feedback';
import resultEvent from '../ducks/ResultEvent';
import { reducer as ReduxFormReducer } from 'redux-form';

const app = combineReducers<AppState>({
    navigation: navigation.reducer,    
    user: user,
    client: client,
    campaign: campaign,
    schedule: schedule,
    emailServer: emailServer,
    phishingDomain: phishingDomain,
    login: login,
    profile: profile,
    landingPage: landingPages,
    redirectPage: redirectPages,
    engagement: engagement,
    emailTemplate: emailTemplate,
    scraperUserAgent: scraperUserAgent,
    shoalScrapeCred: shoalScrapeCred,
    shoalScrapeTask: shoalScrapeTask,
    oAuthConsumer: oAuthConsumer,
    oAuthEngagement: oAuthEngagement,
    oAuthResult: oAuthResult,
    plunder: plunder,
    form: ReduxFormReducer,
    preview: preview,
    targetList: targetList,
    vectorEmail: vectorEmail,
    resultEvent: resultEvent,
    feedback: feedback
});

export default app;