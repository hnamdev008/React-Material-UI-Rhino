import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import EngagementAction from '../../../actions/EngagementAction'
import EngagementState from '../../../model/state/engagement/EngagementState';
import EngagementForm from '../form/EngagementForm';
import EngagementRecord from '../../../model/state/engagement/EngagementRecord';
import { AppState } from '../../../model/state/AppState';
import controls from '../form/FormControls';
import { Control } from '../../components/common/Controls';
import { view } from '../../../ducks/ResultEvent'

const EngagementEditModal = (props: Props) => {
    const selectedRecord = props.state.selectedRecord as EngagementRecord;

    return <EditModalContainer
        title="Edit Engagement"
        action={ EngagementAction }
        controls={ 
            [ 
                controls(props),     
                <Control key="preview">
                    <button onClick={ () => {
                        props.dispatch(EngagementAction.togglePreview(props.state.selectedRecord as EngagementRecord))
                    } }>
                        PREVIEW
                    </button>
                </Control>,
                <Control key="results">
                    <button onClick={ () => {
                        props.dispatch(view(selectedRecord.name, selectedRecord.id))
                    } }>
                        <span className="glyphicon glyphicon-eye-open"></span>
                        RESULTS
                    </button>
                </Control>
            ]
        }
        submitId="engagement-submit-form"
        {...props}>
            <EngagementForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.engagement
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EngagementEditModal);
