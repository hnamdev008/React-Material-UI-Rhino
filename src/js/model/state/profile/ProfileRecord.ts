import Record from '../Record';
import Ref from '../Ref';

class ProfileRecord implements Record {
    timezone: string
    user = new Ref()
    id: number
}

export default ProfileRecord