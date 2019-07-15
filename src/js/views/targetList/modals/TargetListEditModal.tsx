import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import TargetListAction from '../../../actions/TargetListAction'
import TargetListState from '../../../model/state/targetList/TargetListState';
import TargetListForm from '../TargetListForm';
import { AppState } from '../../../model/state/AppState';

// const onSubmit = (values, arg0, arg1) => {
//     TargetListAction.update(arg1.record)
// }

const TargetListEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit Target List"
        action={ TargetListAction }
        {...props}>
            <TargetListForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.targetList
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(TargetListEditModal);
