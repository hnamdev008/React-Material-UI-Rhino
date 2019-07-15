import reduce from '../common';
import PhishingDomainState from '../../model/state/phishingDomain/PhishingDomainState'
import PhishingDomainRecord from '../../model/state/phishingDomain/PhishingDomainRecord'

export default reduce(new PhishingDomainState(), new PhishingDomainRecord());