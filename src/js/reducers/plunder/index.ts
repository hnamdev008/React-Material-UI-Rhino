import reduce from '../common';
import PlunderState from '../../model/state/plunder/PlunderState'
import PlunderRecord from '../../model/state/plunder/PlunderRecord'

export default reduce(new PlunderState(), new PlunderRecord());