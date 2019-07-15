import * as React from 'react';
import { connect } from 'react-redux';
import { AddModalContainer, Props } from '../../common/AddModalContainer';
import TargetListAction from '../../../actions/TargetListAction'
import TargetListState from '../../../model/state/targetList/TargetListState';
import TargetListForm from '../TargetListForm';
import { AppState } from '../../../model/state/AppState';

const TargetListAddModal = (props: Props) => 
    <AddModalContainer
        title="New Target List"
        action={ TargetListAction }
        {...props}>
            <TargetListForm {...props}/>
    </AddModalContainer>

const mapStateToProps = (app: AppState): Props => ({
    state: app.targetList
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(TargetListAddModal);