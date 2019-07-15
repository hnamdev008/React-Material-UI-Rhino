import reduce from '../common';
import ClientState from '../../model/state/client/ClientState'
import ClientRecord from '../../model/state/client/ClientRecord'

export default reduce(new ClientState(), new ClientRecord());