import reduce from '../common';
import UserState from '../../model/state/user/UserState'
import UserRecord from '../../model/state/user/UserRecord'

export default reduce(new UserState(), new UserRecord());