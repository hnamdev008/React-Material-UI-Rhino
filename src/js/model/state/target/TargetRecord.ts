import Record from '../Record';
import Ref from '../Ref';

class TargetRecord implements Record {
    timezone: string
    email: string
    id: number
    firstName: string
    lastName: string
}

export default TargetRecord