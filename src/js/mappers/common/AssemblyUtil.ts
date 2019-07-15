import Dto from '../../model/dto/Dto';
import PagedDto from '../../model/dto/PagedDto';
import Ref from '../../model/state/Ref';

const tie = (owner: Dto, ownerKey: string, targets: Dto[], targetKey: string): Ref => {
    if(!targets) return null;

    const ref = targets.filter(target => owner[ownerKey] == target.id)[0];
    return ref && {
        id: ref.id,
        text: ref[targetKey]
    }
}

const tieMany = (owner: Dto, ownerKey: string, targets: Dto[], targetKey: string): Ref[] => {
    if(!targets) return [];

    return owner[ownerKey].map(id => {
        const ref = targets.filter(target => id == target.id)[0];
        return ref && {
            id: ref.id,
            text: ref[targetKey]
        }
    })
}

export const refLandingPage = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'landing_page', targets, 'name')
}

export const refPhishingDomain = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'domain', targets, 'domain_name')
}

export const refCampaign = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'campaign', targets, 'name')
}

export const refEmailTemplate = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'email_template', targets, 'name')
}

export const refSchedule = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'interval', targets, 'name')
}

export const refRedirectPage = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'redirect_page', targets, 'name')
}

export const refEmailServer = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'email_server', targets, 'host');
}

export const refScraperUserAgent = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'scraper_user_agent', targets, 'name');
}

export const refClient = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'client', targets, 'name');
}

export const refShoalScrapeCreds = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'shoalscrape_creds', targets, 'name');
}

export const refTargetLists = (owner: Dto, targets: Dto[]): Ref[] => {
    return tieMany(owner, 'target_lists', targets, 'nickname');
}

export const refOAuthConsumer = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'oauth_consumer', targets, 'name');
}

export const refConsumer = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'consumer', targets, 'name');
}

export const refTarget = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'target', targets, 'email');
}

export const refOAuthEngagement = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'oauth_engagement', targets, 'name');
}

export const refOAuthResult = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'oauth_result', targets, 'email');
}

export const refUser = (owner: Dto, targets: Dto[]): Ref => {
    return tie(owner, 'user', targets, 'username');
}