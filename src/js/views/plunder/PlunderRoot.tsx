import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import PlunderAction from '../../actions/PlunderAction'
import PlunderState from '../../model/state/plunder/PlunderState';
import PlunderAddModal from './modals/PlunderAddModal';
import PlunderList from './PlunderList';
import PlunderEditModal from './modals/PlunderEditModal';
import RootView from '../common/RootView';
import { ToolbarGroup } from 'material-ui/Toolbar';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';

class PlunderRoot extends React.Component<Props, { addOpen: boolean, editOpen: boolean }> {
    public render() {
        const grids = this.props.state.records
        && this.props.state.records.map(record => {
            return (
                <GridTile
                    key={ record.id }
                    title={ record.oAuthResult.text }
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
                 <Column head="OAuth Result" headKey="oAuthResult" dependee/>
                <Column head="Filename" headKey="filename" />
                <Column head="MIME Type" headKey="mimetype" />
                <Column head="Last Modified" headKey="lastModified" />
                <ActionCol edit delete 
                    editCallback={this.onEdit }/>
            </Table>
        
        return <div>
            <PlunderEditModal />
            <PlunderAddModal />
            <RootView
                title="Plunders"
                onAdd={ this.onAdd }
                widgets={ null }
                onLoad={ this.onLoad }
                grids={grids}
                table={table} 
                records={this.props.state.records} />
        </div>
    }

    private onAdd = () => {
        PlunderAction.openAdd(this.props.dispatch);
    }

    private onEdit = (id) => {
        PlunderAction.openEdit(this.props.dispatch, id)
    }

    private onLoad = () => {
        PlunderAction.initPage(this.props.dispatch);
    }   
}

interface Props {
    dispatch?: Function
    state?: PlunderState;
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.plunder
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(PlunderRoot);

  