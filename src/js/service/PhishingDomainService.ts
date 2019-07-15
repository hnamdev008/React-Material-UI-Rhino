import CrudService from './CrudServiceZ';
import PhishingDomainDto from '../model/dto/phishingDomain/PhishingDomainDto';
import * as http from './HttpUtil';

class PhishingDomainService extends CrudService<PhishingDomainDto, any> {
    constructor() {
        super('phishing-domains');
    }

    public async getSuggestions(): Promise<{ phishing_domains: PhishingDomainDto[] }> {
        return http.get<{ phishing_domains: PhishingDomainDto[] }>
            (`${this.resource}?exclude[]=*&include[]=domain_name&include[]=id&per_page=30`);
    }
}

export default PhishingDomainService;