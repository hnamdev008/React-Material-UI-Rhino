// import { UserService } from './user/UserService';
// import { MockUserService } from './user/MockUserService';
// import { ClientService } from './client/ClientService';
// import { MockClientService } from './client/MockClientService';
// // import { CampaignService } from './campaign/CampaignService';
// import { Service } from './Service';

// const isProd = (): boolean => {
//     // return process.env.NODE_ENV === 'prod';
//     return true;    
// }

// const isDev = (): boolean => {
//     return process.env.NODE_ENV === 'dev'
// }

// export const of = <T extends Service>(type: ServiceType): T => {
//     switch(type) {
//         case ServiceType.CAMPAIGN:
//             return new (require('./campaign/CampaignService'))
//                     .CampaignService();

//         case ServiceType.ENGAGEMENT:
//             return new (require('./engagement/EngagementService'))
//                     .EngagementService();

//         case ServiceType.CLIENT:
//             return isProd() || isDev()
//                 ? new (require('./client/ClientService'))
//                     .ClientService()
//                 : new (require('./client/MockClientService'))
//                     .MockClientService();

//         case ServiceType.SCHEDULE:
//             return new (require('./schedule/ScheduleService'))
//                     .ScheduleService();
            
//         case ServiceType.USER:
//             return isProd() || isDev()
//                 ? new (require('./user/UserService'))
//                     .UserService()
//                 : new (require('./user/MockUserService'))
//                     .MockUserService();

//         case ServiceType.EMAIL_SERVER:
//             return new (require('./emailServer/EmailServerService'))
//                     .EmailServerService();

//         case ServiceType.PHISHING_DOMAIN:
//             return new (require('./phishingDomain/PhishingDomainService'))
//                     .PhishingDomainService();

//         case ServiceType.LANDING_PAGES:
//             return new (require('./landingPages/LandingPagesService'))
//                     .LandingPagesService();

//         case ServiceType.IDENTITY:
//             return isProd() || isDev()
//                 ? new (require('./identity/IdentityService'))
//                     .IdentityService()
//                 : new (require('./identity/MockIdentityService'))
//                     .MockIdentityService()
//     }
// }

// export enum ServiceType {
//     CLIENT,
//     CAMPAIGN,
//     USER,
//     IDENTITY,
//     ENGAGEMENT,
//     EMAIL_SERVER,
//     PHISHING_DOMAIN,
//     SCHEDULE,
//     LANDING_PAGES
// }