import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import RedirectPageAction from '../../actions/RedirectPageAction'
import RedirectPageState from '../../model/state/redirectPage/RedirectPageState';
import RedirectPageAddModal from './modals/RedirectPageAddModal';
import RedirectPageList from './RedirectPageList';
import RedirectPageEditModal from './modals/RedirectPageEditModal';
import RootView from '../common/RootView';
import { ToolbarGroup } from 'material-ui/Toolbar';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';

class RedirectPageRoot extends React.Component<Props, { addOpen: boolean, editOpen: boolean }> {
    public render() {
        const grids = this.props.state.records
        && this.props.state.records.map(record => {
            return (
                <GridTile
                    key={ record.id }
                    title={ record.name }
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
                <Column head="Name" headKey="name" />
                <Column head="Type" headKey="pageType" />
                <Column head="Source URL" headKey="url" />
                <ActionCol edit delete 
                    editCallback={this.onEdit }/>
            </Table>
        
        return <div>
            <RedirectPageEditModal />
            <RedirectPageAddModal />
            <RootView
                title="RedirectPages"
                onAdd={ this.onAdd }
                widgets={ null }
                onLoad={ this.onLoad }
                grids={grids}
                table={table} 
                records={this.props.state.records} />
        </div>
    }

    private onAdd = () => {
        RedirectPageAction.openAdd(this.props.dispatch);
    }

    private onEdit = (id) => {
        RedirectPageAction.openEdit(this.props.dispatch, id)
    }

    private onLoad = () => {
        RedirectPageAction.initPage(this.props.dispatch);
    }   
}

interface Props {
    dispatch?: Function
    state?: RedirectPageState;
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.redirectPage
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(RedirectPageRoot);

  