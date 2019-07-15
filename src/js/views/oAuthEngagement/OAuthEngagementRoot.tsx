import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import OAuthEngagementAction from '../../actions/OAuthEngagementAction'
import OAuthEngagementState from '../../model/state/oAuthEngagement/OAuthEngagementState';
import OAuthEngagementAddModal from './modals/OAuthEngagementAddModal';
import OAuthEngagementList from './OAuthEngagementList';
import OAuthEngagementEditModal from './modals/OAuthEngagementEditModal';
import RootView from '../common/RootView';
import { ToolbarGroup } from 'material-ui/Toolbar';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';

class OAuthEngagementRoot extends React.Component<Props, { addOpen: boolean, editOpen: boolean }> {
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
                <Column head="State" headKey="state" />
                <Column head="Title" headKey="name" />
                <Column head="Description" headKey="description" />
                <Column head="Campaign" headKey="campaign" dependee />
                <Column head="OAuth Consumer" headKey="oAuthConsumer" dependee />
                <ActionCol edit delete 
                    editCallback={this.onEdit }/>
            </Table>
        
        return <div>
            <OAuthEngagementEditModal />
            <OAuthEngagementAddModal />
            <RootView
                title="OAuthEngagements"
                onAdd={ this.onAdd }
                widgets={ null }
                onLoad={ this.onLoad }
                grids={grids}
                table={table} 
                records={this.props.state.records} />
        </div>
    }

    private onAdd = () => {
        OAuthEngagementAction.openAdd(this.props.dispatch);
    }

    private onEdit = (id) => {
        OAuthEngagementAction.openEdit(this.props.dispatch, id)
    }

    private onLoad = () => {
        OAuthEngagementAction.initPage(this.props.dispatch);
    }   
}

interface Props {
    dispatch?: Function
    state?: OAuthEngagementState;
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.oAuthEngagement
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(OAuthEngagementRoot);

  