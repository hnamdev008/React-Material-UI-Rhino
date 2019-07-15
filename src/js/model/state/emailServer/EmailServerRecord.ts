import Record from '../Record';
import Ref from '../Ref';

class EmailServerRecord implements Record {
    useTls: boolean
    host: string
    login: string
    testRecipient: string
    password: string
    port: number
    id: number
    checkEmailMessage?: string
}

export default EmailServerRecord