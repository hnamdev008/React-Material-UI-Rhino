import reduce from '../common';
import RedirectPageState from '../../model/state/redirectPage/RedirectPageState'
import RedirectPageRecord from '../../model/state/redirectPage/RedirectPageRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new RedirectPageState(), new RedirectPageRecord());