import reduce from '../common';
import ProfileState from '../../model/state/profile/ProfileState'
import ProfileRecord from '../../model/state/profile/ProfileRecord'

export default reduce(new ProfileState(), new ProfileRecord());