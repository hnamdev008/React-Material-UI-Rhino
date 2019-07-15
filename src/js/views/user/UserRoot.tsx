import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import UserAction from '../../actions/UserAction'
import UserState from '../../model/state/user/UserState';
import UserAddModal from './modals/UserAddModal';
import UserList from './UserList';
import UserEditModal from './modals/UserEditModal';
import RootView from '../common/RootView';
import { ToolbarGroup } from 'material-ui/Toolbar';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';

class UserRoot extends React.Component<Props, { addOpen: boolean, editOpen: boolean }> {
    public render() {
        const grids = this.props.state.records
        && this.props.state.records.map(record => {
            return (
                <GridTile
                    key={ record.id }
                    title={ `${record.firstName} ${record.lastName}` }
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
                <Column head="Login" headKey="username" />
                <Column head="Email" headKey="email" />
                <Column head="First Name" headKey="firstName" />
                <Column head="Last Name" headKey="lastName" />
                <Column head="Is Active" bool headKey="isActive" />
                <ActionCol edit delete 
                    editCallback={this.onEdit }/>
            </Table>
        
        return <div>
            <UserEditModal />
            <UserAddModal />
            <RootView
                title="Users"
                onAdd={ this.onAdd }
                widgets={ null }
                onLoad={ this.onLoad }
                grids={grids}
                table={table} 
                records={this.props.state.records} />
        </div>
    }

    private onAdd = () => {
        UserAction.openAdd(this.props.dispatch);
    }

    private onEdit = (id) => {
        UserAction.openEdit(this.props.dispatch, id)
    }

    private onLoad = () => {
        UserAction.initPage(this.props.dispatch);
    }   
}

interface Props {
    dispatch?: Function
    state?: UserState;
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.user
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(UserRoot);

  