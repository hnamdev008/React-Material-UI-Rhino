import * as React from 'react';
import { connect } from 'react-redux';
import RootView from '../common/RootView';
import TargetListState from '../../model/state/targetList/TargetListState';
import { ToolbarGroup } from 'material-ui/Toolbar';
import TargetListAction from '../../actions/TargetListAction';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import FileUpload from 'material-ui/svg-icons/file/file-upload';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';
import { AppState } from '../../model/state/AppState'; 
import TargetListEditModal from './modals/TargetListEditModal'
import TargetListAddModal from './modals/TargetListAddModal'
const Dropzone = require('react-dropzone');
const fs = require('browserify-fs');
//const fs = require('fs');

class TargetListRoot extends React.Component<Props, { addOpen: boolean, editOpen: boolean }> {
    public render() {
        const widgets =
        <Dropzone
            className="upload-zone" 
            onDrop={this.onDrop}>
            <FileUpload /><span>Drop-in or click to upload CSV</span>
        </Dropzone>

        const grids = this.props.state.records
        && this.props.state.records.map(record => {
            return (
                <GridTile
                    key={ record.id }
                    title={ record.nickname }
                    style={ { backgroundColor: 'rgba(51, 51, 61, .7)' } }
                    titlePosition="bottom">
                        <IconButton
                            onTouchTap={ () => { this.onEdit(record.id) } }>
                            <OpenInNew color="white" />
                        </IconButton>
                </GridTile>
            );
        })

        const table = <Table data={ this.props.state.records }>
            <Column head="Nickname" headKey="nickname" />
            <Column head="Description" headKey="description" />
            <Column head="Client" headKey="client" dependee />
            <ActionCol edit delete 
                editCallback={(id) => this.onEdit(id)}/>
        </Table>
        
        return <div>
            <TargetListEditModal />
            <TargetListAddModal />
            <RootView
                title="Target Lists"
                onAdd={ this.onAdd }
                widgets={ widgets }
                onLoad={ this.onLoad }
                grids={grids}
                table={table} 
                records={this.props.state.records} />
        </div>
    }

    private onDrop = (files: any[]) => {
        this.props.dispatch(TargetListAction.upload({ file: files[0] }));
    }

    private onAdd = () => {
        this.props.dispatch(TargetListAction.openAdd());
    }

    private onEdit = (id) => {
        this.props.dispatch(TargetListAction.openEdit(id))
    }

    private onLoad = () => {
        this.props.dispatch(TargetListAction.load())
    }   
}

interface Props {
    dispatch?: Function
    state?: TargetListState;
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.targetList
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(TargetListRoot);

