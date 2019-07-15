import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import OAuthConsumerAction from '../../actions/OAuthConsumerAction'
import OAuthConsumerState from '../../model/state/oAuthConsumer/OAuthConsumerState';
import OAuthConsumerAddModal from './modals/OAuthConsumerAddModal';
import OAuthConsumerList from './OAuthConsumerList';
import OAuthConsumerEditModal from './modals/OAuthConsumerEditModal';
import RootView from '../common/RootView';
import { ToolbarGroup } from 'material-ui/Toolbar';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';

class OAuthConsumerRoot extends React.Component<Props, { addOpen: boolean, editOpen: boolean }> {
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
                <Column head="Description" headKey="description" />
                <Column head="Scope" headKey="scope" />
                <Column head="Callback URL" headKey="callbackUrl" />
                <Column head="Bounce URL" headKey="bounceUrl" />
                <ActionCol edit delete 
                    editCallback={this.onEdit }/>
            </Table>
        
        return <div>
            <OAuthConsumerEditModal />
            <OAuthConsumerAddModal />
            <RootView
                title="OAuthConsumers"
                onAdd={ this.onAdd }
                widgets={ null }
                onLoad={ this.onLoad }
                grids={grids}
                table={table} 
                records={this.props.state.records} />
        </div>
    }

    private onAdd = () => {
        OAuthConsumerAction.openAdd(this.props.dispatch);
    }

    private onEdit = (id) => {
        OAuthConsumerAction.openEdit(this.props.dispatch, id)
    }

    private onLoad = () => {
        OAuthConsumerAction.initPage(this.props.dispatch);
    }   
}

interface Props {
    dispatch?: Function
    state?: OAuthConsumerState;
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.oAuthConsumer
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(OAuthConsumerRoot);

  