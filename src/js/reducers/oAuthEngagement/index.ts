import reduce from '../common';
import OAuthEngagementState from '../../model/state/oAuthEngagement/OAuthEngagementState'
import OAuthEngagementRecord from '../../model/state/oAuthEngagement/OAuthEngagementRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new OAuthEngagementState(), new OAuthEngagementRecord());