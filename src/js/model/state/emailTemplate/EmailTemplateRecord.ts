import Record from '../Record';
import Ref from '../Ref';

class EmailTemplateRecord implements Record {
    subjectHeader: string
    fromHeader: string
    template: string
    name: string
    id: number
    shortcodeErrors?: string
}

export default EmailTemplateRecord