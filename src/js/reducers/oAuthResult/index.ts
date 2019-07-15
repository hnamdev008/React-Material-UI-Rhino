import reduce from '../common';
import OAuthResultState from '../../model/state/oAuthResult/OAuthResultState'
import OAuthResultRecord from '../../model/state/oAuthResult/OAuthResultRecord'

export default reduce(new OAuthResultState(), new OAuthResultRecord());