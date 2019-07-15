import Record from '../Record';
import Ref from '../Ref';

class UserRecord implements Record {
    id: number
    firstName: string
    lastName: string
    isActive: boolean
    email: string
    username: string
    password?: string
}

export default UserRecord