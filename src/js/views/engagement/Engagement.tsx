import * as React from 'react';
import * as react_redux from 'react-redux';
import {
    Card, 
    CardActions, 
    CardHeader, 
    CardText,
    CardMedia } from 'material-ui/Card';
import {
    GridList, 
    GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import OpenInNew from 'material-ui/svg-icons/action/open-in-new';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import ViewList from 'material-ui/svg-icons/action/view-list';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import FilterList from 'material-ui/svg-icons/content/filter-list';
import EngagementAction from '../../actions/EngagementAction';
import { connect } from 'react-redux';
import { AppState } from '../../model/state/AppState';
import EngagementState from '../../model/state/engagement/EngagementState';
import Ref from '../../model/state/Ref';
import {
    Toolbar, 
    ToolbarGroup, 
    ToolbarSeparator,
    ToolbarTitle } from 'material-ui/Toolbar';
import AutoCompleteFilter from '../common/fields/AutoCompleteFilter'
import FlatButton from 'material-ui/FlatButton';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';
import EngagementAddModal from './modals/EngagementAddModal';
import EngagementEditModal from './modals/EngagementEditModal';
import ScheduleAddModal from '../schedule/modals/ScheduleAddModal';
import EmailTemplateAddModal from '../emailTemplate/modals/EmailTemplateAddModal';
import EmailServerAddModal from '../emailServer/modals/EmailServerAddModal';
import LandingPageAddModal from '../landingPage/modals/LandingPageAddModal';
import RedirectPageAddModal from '../redirectPage/modals/RedirectPageAddModal';
import Preview from './Preview';
import FetchAction from '../../actions/FetchAction';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import Indeterminate from 'material-ui/svg-icons/toggle/indeterminate-check-box';

const cardHeaderStyle = {
    titleStyle: {
        fontSize: 25
    },
    style: {
        backgroundColor: '#D74037'
    }
}

const gridListStyles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        padding: 20
    }
}

class EngagementRoot extends React.Component<Props, { view: 'grid' | 'table', expanded: boolean }> {
    constructor(props) {
        super(props);
        this.props.dispatch(EngagementAction.fetch());
        this.state = {
            view: 'grid',
            expanded: true
        }
    }

    public render() {
        return (
            <div>
                <Preview />
                <EngagementAddModal />
                <EngagementEditModal />
                <ScheduleAddModal />
                <EmailServerAddModal />
                <EmailTemplateAddModal />
                <LandingPageAddModal />
                <RedirectPageAddModal />
                <Card
                style={ { backgroundColor: 'rgba(28,28,38, .6)' } }
                expanded={ this.state.expanded }
                onExpandChange={ this.onExpandChange } >
                    <CardHeader
                        title="Engagements"
                        { ...cardHeaderStyle }
                        actAsExpander={true}
                        showExpandableButton={true} />
                    <CardActions
                        style={ { padding: 0 } }
                    >
                        <Toolbar
                                style={ { backgroundColor: 'rgb(28,28,38)', paddingLeft: 10, paddingRight: 10, margin: 0 } }
                            >
                                <ToolbarGroup
                                    firstChild={true}
                                >
                                    <FlatButton 
                                        label="Add" 
                                        icon={ <NoteAdd /> }
                                        onTouchTap={ () => this.props.dispatch(EngagementAction.openAdd()) }/> 
                                </ToolbarGroup>
                                {
                                    this.state.expanded
                                    &&
                                    <ToolbarGroup>
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
                                        <ToolbarSeparator />
                                        <IconButton
                                            tooltip="Toggle view"
                                            onTouchTap={ this.onToggleView }
                                        >
                                            { 
                                                this.state.view == 'grid'
                                                ?
                                                <ViewList />
                                                :
                                                <ViewModule />
                                            }
                                        </IconButton>
                                    </ToolbarGroup>
                                }
                            </Toolbar>                 
                    </CardActions>
                    <CardMedia
                        expandable={true}
                        style={ { padding: 20 } }>
                            {
                                this.state.view == 'grid'
                                ?
                                <GridList
                                    cols={5}
                                    cellHeight={100}>
                                        { 
                                            this.props.state.records
                                            && this.props.state.records.map(record => {
                                                return (
                                                    <GridTile
                                                        key={ record.id }
                                                        title={ record.name }
                                                        style={ { backgroundColor: 'rgba(51, 51, 61, .7)' } }
                                                        titlePosition="bottom">
                                                            <IconButton
                                                                onTouchTap={ () => this.onEditOpen(record.id) }>
                                                                <OpenInNew color="white" />
                                                            </IconButton>
                                                            {
                                                                record.state == 4 
                                                                ?
                                                                <IconButton
                                                                    onTouchTap={ () => this.onEditOpen(record.id) }>
                                                                    <CheckBox color="green" />
                                                                </IconButton>
                                                                :
                                                                <IconButton
                                                                    onTouchTap={ () => this.onEditOpen(record.id) }>
                                                                    <Indeterminate color="blue" />
                                                                </IconButton>
                                                            }
                                                    </GridTile>
                                                );
                                            })
                                        }
                                </GridList>
                                :
                                <Table data={ this.props.state.records }>
                                    <Column head="State" headKey="state" />
                                    <Column head="Title" headKey="name" />
                                    <Column head="Description" headKey="description" />
                                    <Column head="Campaign" headKey="campaign" dependee />
                                    <Column head="Landing Page" headKey="landingPage" dependee />
                                    <ActionCol edit delete 
                                        editCallback={this.onEditOpen}/>
                                </Table>
                            }
                    </CardMedia>
                </Card>
            </div>
        );
    }

    private onEditOpen = (id: number) => {
        this.props.dispatch(EngagementAction.openEdit(id));
    }

    private onToggleView = () => {
        this.setState({
            view: this.state.view == 'grid' ? 'table' : 'grid',
            expanded: this.state.expanded
        });
    }

    private onExpandChange = (expanded: boolean) => {
        this.setState({
            view: this.state.view,
            expanded: expanded
        });
    }
}

interface Props {
    title?: string
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