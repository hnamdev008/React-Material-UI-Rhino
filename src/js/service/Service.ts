import { Identity } from '../security/Identity';

export abstract class Service {
    protected baseServiceUrl = () => {
        const base = Identity
            .Server
            .getBaseUrl();
        return `${base}/api`;
    }
}