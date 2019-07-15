import Record from '../Record';
import Ref from '../Ref';

class CampaignRecord implements Record {
    client = new Ref();
    name: string
    description: string
    id: number
}

export default CampaignRecord