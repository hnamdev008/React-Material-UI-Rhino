import * as React from 'react';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';
import { Grid } from '../components/common/grid/Grid';
import ShoalScrapeCredRecord from '../../model/state/shoalScrapeCred/ShoalScrapeCredRecord';
import { ViewType } from '../../model/state/CrudState';

class ShoalScrapeCredList extends React.Component<Props, void> {
    public render() {

        if(!this.props.data) return null;

        return (
            this.props.view == 'table' 
            ?
            <Table data={this.props.data}>
                <Column head="Name" headKey="name" />
                <Column head="Username" headKey="username" />
                <Column head="Password" headKey="password" />
                <Column head="Scraper User-Agent" headKey="scraperUserAgent" dependee />
                <ActionCol edit delete 
                    editCallback={this.props.onOpen}/>
            </Table>
            :
            <Grid 
                data={this.props.data} 
                label={ (datum) => {
                    return `${datum['name']}`;
                } }
                openCb={this.props.onOpen}/> 
        );
    } 
}

interface Props {
    onOpen(id: number): void
    view: ViewType
    data: ShoalScrapeCredRecord[];
}

export default ShoalScrapeCredList;
  
