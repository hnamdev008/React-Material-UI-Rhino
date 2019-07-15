import reduce from '../common';
import CampaignState from '../../model/state/campaign/CampaignState'
import CampaignRecord from '../../model/state/campaign/CampaignRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new CampaignState(), new CampaignRecord());