import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import EngagementAction from '../../actions/EngagementAction'
import EngagementState from '../../model/state/engagement/EngagementState';
import EngagementAddModal from './modals/EngagementAddModal';
import EngagementList from './EngagementList';
import EngagementEditModal from './modals/EngagementEditModal';
import RootView from '../common/RootView';
import { ToolbarGroup } from 'material-ui/Toolbar';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';
import ScheduleAddModal from '../schedule/modals/ScheduleAddModal';
import EmailTemplateAddModal from '../emailTemplate/modals/EmailTemplateAddModal';
import EmailServerAddModal from '../emailServer/modals/EmailServerAddModal';
import LandingPageAddModal from '../landingPage/modals/LandingPageAddModal';
import RedirectPageAddModal from '../redirectPage/modals/RedirectPageAddModal';
import ResultEventModal from '../resultEvent/ResultEventModal';
import Preview from './Preview';
import FlatButton from 'material-ui/FlatButton';
import FilterList from 'material-ui/svg-icons/content/filter-list';
import AutoCompleteFilter from '../common/fields/AutoCompleteFilter'
import FetchAction from '../../actions/FetchAction';
import Ref from '../../model/state/Ref';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import Indeterminate from 'material-ui/svg-icons/toggle/indeterminate-check-box';

class EngagementRoot extends React.Component<Props, { addOpen: boolean, editOpen: boolean }> {
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
                         {
                            record.state == 4 
                            ?
                            <IconButton
                                onTouchTap={ () => this.onEdit(record.id) }>
                                <CheckBox color="green" />
                            </IconButton>
                            :
                            <IconButton
                                onTouchTap={ () => this.onEdit(record.id) }>
                                <Indeterminate color="blue" />
                            </IconButton>
                        }
                </GridTile>
            );
        })

        const table = <Table data={this.props.state.records}>
                <Column head="State" headKey="state" />
                <Column head="Title" headKey="name" />
                <Column head="Description" headKey="description" />
                <Column head="Campaign" headKey="campaign" dependee />
                <Column head="Landing Page" headKey="landingPage" dependee />
                <ActionCol edit delete 
                    editCallback={this.onEdit }/>
            </Table>

        const widgets = <span>
            <FlatButton 
                label="Clear Filter"
                labelPosition="before" 
                icon={ <FilterList /> }
                onTouchTap={ () => this.props.dispatch(EngagementAction.filterByClient(null)) }/>
            <AutoCompleteFilter
                label="Filter by Client"
                fetch={ FetchAction.getClientSuggestions }
                onSelect={ (ref: Ref) => this.props.dispatch(EngagementAction.filterByClient(ref.id)) }
            />
        </span>
        
        return <div>
            <Preview />
            <EngagementAddModal />
            <EngagementEditModal />
            <ScheduleAddModal />
            <EmailServerAddModal />
            <EmailTemplateAddModal />
            <LandingPageAddModal />
            <RedirectPageAddModal />
            <ResultEventModal />
            
            <RootView
                title="Engagements"
                onAdd={ this.onAdd }
                widgets={ widgets }
                onLoad={ this.onLoad }
                grids={grids}
                table={table} 
                records={this.props.state.records} />
        </div>
    }

    private onAdd = () => {
        this.props.dispatch(EngagementAction.openAdd());
    }

    private onEdit = (id) => {
        this.props.dispatch(EngagementAction.openEdit(id));
    }

    private onLoad = () => {
        EngagementAction.initPage(this.props.dispatch);
    }   
}

interface Props {
    dispatch?: Function
    state?: EngagementState;
}

const mapStateToProps = (app: AppState): Props => ({
    state: app.engagement
})

export default connect(
    mapStateToProps, 
    dispatch => ({
        dispatch
    })
)(EngagementRoot);

  