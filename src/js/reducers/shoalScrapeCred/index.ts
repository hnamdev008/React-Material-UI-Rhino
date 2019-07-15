import reduce from '../common';
import ShoalScrapeCredState from '../../model/state/shoalScrapeCred/ShoalScrapeCredState'
import ShoalScrapeCredRecord from '../../model/state/shoalScrapeCred/ShoalScrapeCredRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new ShoalScrapeCredState(), new ShoalScrapeCredRecord());