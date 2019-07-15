import Record from '../Record';
import Ref from '../RefZ';

class TargetListRecord implements Record {
    description: string
    client: Ref;
    nickname: string
    target: Ref[]
    id: number
}

export default TargetListRecord