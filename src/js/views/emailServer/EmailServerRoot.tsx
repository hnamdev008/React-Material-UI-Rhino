import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import EmailServerAction from '../../actions/EmailServerAction'
import EmailServerState from '../../model/state/emailServer/EmailServerState';
import EmailServerAddModal from './modals/EmailServerAddModal';
import EmailServerList from './EmailServerList';
import EmailServerEditModal from './modals/EmailServerEditModal';
import RootView from '../common/RootView';
import { ToolbarGroup } from 'material-ui/Toolbar';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';

class EmailServerRoot extends React.Component<Props, { addOpen: boolean, editOpen: boolean }> {
    public render() {
        const grids = this.props.state.records
        && this.props.state.records.map(record => {
            return (
                <GridTile
                    key={ record.id }
                    title={ record.login }
                    style={ { backgroundColor: 'rgba(51, 51, 61, .7)' } }
                    titlePosition="bottom">
                        <IconButton
                            onTouchTap={ () => { this.onEdit(record.id) } }>
                            <OpenInNew color="white" />
                        </IconButton>
                </GridTile>
            );
        })

        const table = <Table data={this.props.state.records}>
                <Column head="Login" headKey="login" />
                <Column head="Host" headKey="host" />
                <ActionCol edit delete 
                    editCallback={this.onEdit }/>
            </Table>
        
        return <div>
            <EmailServerEditModal />
            <EmailServerAddModal />
            <RootView
                title="EmailServers"
                onAdd={ this.onAdd }
                widgets={ null }
                onLoad={ this.onLoad }
                grids={grids}
                table={table} 
                records={this.props.state.records} />
        </div>
    }

    private onAdd = () => {
        EmailServerAction.openAdd(this.props.dispatch);
    }

    private onEdit = (id) => {
        EmailServerAction.openEdit(this.props.dispatch, id)
    }

    private onLoad = () => {
        EmailServerAction.initPage(this.props.dispatch);
    }   
}

interface Props {
    dispatch?: Function
    state?: EmailServerState;
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.emailServer
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(EmailServerRoot);

  