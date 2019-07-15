import reduce from '../common';
import ShoalScrapeTaskState from '../../model/state/shoalScrapeTask/ShoalScrapeTaskState'
import ShoalScrapeTaskRecord from '../../model/state/shoalScrapeTask/ShoalScrapeTaskRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new ShoalScrapeTaskState(), new ShoalScrapeTaskRecord());