import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import ScheduleAction from '../../../actions/ScheduleAction'
import ScheduleState from '../../../model/state/schedule/ScheduleState';
import ScheduleForm from '../ScheduleForm';
import { AppState } from '../../../model/state/AppState';

const ScheduleEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit Schedule"
        action={ ScheduleAction }
        {...props}>
            <ScheduleForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.schedule
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ScheduleEditModal);
