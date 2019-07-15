import { CrudState } from '../CrudState';
import OAuthConsumerRecord from './OAuthConsumerRecord';
import OAuthConsumerWidget from './OAuthConsumerWidget';

class OAuthConsumerState extends CrudState {
    constructor() {
        super('oAuthConsumer');
    }

    records: OAuthConsumerRecord[];
    selectedRecord: OAuthConsumerRecord;
    widgetState: OAuthConsumerWidget;
}

export default OAuthConsumerState;