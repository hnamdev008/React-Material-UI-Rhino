import EngagementRecord from '../engagement/EngagementRecord'

interface PreviewState {
    engagement?: EngagementRecord
    open: boolean
    startRequest: boolean
    emailConfirmed: boolean
    landingPageConfirmed: boolean
    redirectPageConfirmed: boolean
}

export default PreviewState;