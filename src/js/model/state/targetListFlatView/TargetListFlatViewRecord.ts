import Record from '../Record';
import Ref from '../RefZ';

class TargetListFlatViewRecord implements Record {
    description: string
    client: Ref;
    nickname: string
    target: { [key:string]: string }[]
    id: number
}

export default TargetListFlatViewRecord