import * as React from 'react';
import { connect } from 'react-redux';
import { EditModalContainer, Props} from '../../common/EditModalContainer';
import PlunderAction from '../../../actions/PlunderAction'
import PlunderState from '../../../model/state/plunder/PlunderState';
import PlunderForm from '../PlunderForm';
import { AppState } from '../../../model/state/AppState';

const PlunderEditModal = (props: Props) => {
    return <EditModalContainer
        title="Edit Plunder"
        action={ PlunderAction }
        {...props}>
            <PlunderForm />
    </EditModalContainer>
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.plunder
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(PlunderEditModal);
