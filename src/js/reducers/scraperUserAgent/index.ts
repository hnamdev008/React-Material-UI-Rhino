import reduce from '../common';
import ScraperUserAgentState from '../../model/state/scraperUserAgent/ScraperUserAgentState'
import ScraperUserAgentRecord from '../../model/state/scraperUserAgent/ScraperUserAgentRecord'
import { Action } from '../../actions/Action';
import { ActionType } from '../../actions/ActionType';
import { copy } from '../../common/Util';

export default reduce(new ScraperUserAgentState(), new ScraperUserAgentRecord());