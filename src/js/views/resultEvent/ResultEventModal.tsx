import * as React from 'react';
import * as react_redux from 'react-redux';
import { Modal } from '../components/common/Modal2';
import { Control } from '../components/common/Controls';
import { AppState } from '../../model/state/AppState';
import Record from '../../model/state/Record';
import ResultEventState from '../../model/state/resultEvent/ResultEventState';
import ActionCreator from '../../actions/ActionCreator';
import { connect } from 'react-redux';
import { cancel } from '../../ducks/ResultEvent';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const ResultModal = (props: Props) => {
    const onCancel = (): void => {
        props.dispatch(cancel());
    }

    return props.state.mode == 'edit' 
    && <Dialog
        autoScrollBodyContent={true}
        title={ props.state.engagmentName }
        actions={[,
            <RaisedButton
                label="OK"
                primary={true}
                onTouchTap={ onCancel } />,
        ]}
        style={ { paddingTop: 0} }
        repositionOnUpdate={false}
        contentStyle={ 
            { 
                width: '95%',
                maxWidth: 'none' 
            } 
        }
        open={ props.state.mode == 'edit' }  >

            <div style={ { marginTop: 25 } }>
                <Table data={props.state.records}>
                    <Column head="Target List" headKey="targetList" />
                    <Column head="Email" headKey="email" />
                    <Column head="First Name" headKey="firstname" />
                    <Column head="Last Name" headKey="lastname" />
                    <Column head="Event Type" headKey="eventType" />
                    <Column head="Time" headKey="timestamp" />
                    <Column head="User Agent" headKey="userAgent" />
                    <Column head="IP" headKey="ip" />
                    <Column head="Login" headKey="login" />
                    <Column head="Password" headKey="password" />
                    <Column head="Form Data" headKey="rawData" />
                    <ActionCol edit delete 
                        editCallback={ null }/>
                </Table>
            </div>
    </Dialog>   
}

export interface Props {
    dispatch?: Function
    state?: ResultEventState
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.resultEvent
})

export default connect(
    mapStateToProps, 
    (dispatch): Props => ({
        dispatch: dispatch
    })
)(ResultModal);
