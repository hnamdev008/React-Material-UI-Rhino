import PagedDto from '../PagedDto'
import PhishingDomainDto from './PhishingDomainDto';

interface PhishingDomainXDto extends PagedDto {
    phishing_domains: PhishingDomainDto[];
}

export default PhishingDomainXDto;

