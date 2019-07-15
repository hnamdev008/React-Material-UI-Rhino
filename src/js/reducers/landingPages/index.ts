import reduce from '../common';
import LandingPageState from '../../model/state/landingPage/LandingPageState'
import LandingPageRecord from '../../model/state/landingPage/LandingPageRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new LandingPageState(), new LandingPageRecord());