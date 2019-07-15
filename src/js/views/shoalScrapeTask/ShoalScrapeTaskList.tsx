import * as React from 'react';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';
import { Grid } from '../components/common/grid/Grid';
import ShoalScrapeTaskRecord from '../../model/state/shoalScrapeTask/ShoalScrapeTaskRecord';
import { ViewType } from '../../model/state/CrudState';

class ShoalScrapeTaskList extends React.Component<Props, void> {
    public render() {

        if(!this.props.data) return null;

        return (
            this.props.view == 'table' 
            ?
            <Table data={this.props.data}>
                <Column head="State" headKey="state" />
                <Column head="Company" headKey="company" />
                <Column head="Domain" headKey="domain" />
                <Column head="Last Started" headKey="lastStartedAt" />
                <ActionCol edit delete 
                    editCallback={this.props.onOpen}/>
            </Table>
            :
            <Grid 
                data={this.props.data} 
                label={ (datum) => {
                    return `${datum['domain']}`;
                } }
                openCb={this.props.onOpen}/> 
        );
    } 
}

interface Props {
    onOpen(id: number): void
    view: ViewType
    data: ShoalScrapeTaskRecord[];
}

export default ShoalScrapeTaskList;
  
