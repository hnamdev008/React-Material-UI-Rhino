import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import EngagementAction from '../../../actions/EngagementAction'
import EngagementState from '../../../model/state/engagement/EngagementState';
import EngagementForm from '../form/EngagementForm';
import { AppState } from '../../../model/state/AppState';
import controls from '../form/FormControls';

const EngagementAddModalContainer = (props: Props) => 
    <AddModalContainer
        title="New Engagement"
        action={ EngagementAction }
        controls={ controls(props) }
        submitId="engagement-submit-form"
        {...props}>
            <EngagementForm mode="add" />
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.engagement
})

const EngagementAddModal = connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(EngagementAddModalContainer);

export default EngagementAddModal;