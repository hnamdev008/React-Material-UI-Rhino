import Record from '../Record';
import Ref from '../Ref';

class PlunderRecord implements Record {
    mimetype: string
    oAuthResult = new Ref()
    filename: string
    lastModified: string
    fileId: string
    path: string
    data: string
    id: number
}

export default PlunderRecord