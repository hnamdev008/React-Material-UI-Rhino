import reduce from '../common';
import OAuthConsumerState from '../../model/state/oAuthConsumer/OAuthConsumerState'
import OAuthConsumerRecord from '../../model/state/oAuthConsumer/OAuthConsumerRecord'

export default reduce(new OAuthConsumerState(), new OAuthConsumerRecord());