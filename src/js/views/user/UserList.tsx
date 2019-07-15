import * as React from 'react';
import { Table } from '../components/common/table/Table';
import { Column } from '../components/common/table/Column';
import { ActionCol } from '../components/common/table/ActionCol';
import { Grid } from '../components/common/grid/Grid';
import UserRecord from '../../model/state/user/UserRecord';
import { ViewType } from '../../model/state/CrudState';

class UserList extends React.Component<Props, void> {
    public render() {

        if(!this.props.data) return null;

        return (
            this.props.view == 'table' 
            ?
            <Table data={this.props.data}>
                <Column head="Login" headKey="username" />
                <Column head="Email" headKey="email" />
                <Column head="First Name" headKey="firstName" />
                <Column head="Last Name" headKey="lastName" />
                <Column head="Is Active" bool headKey="isActive" />
                <ActionCol edit delete 
                    editCallback={this.props.onOpen}/>
            </Table>
            :
            <Grid 
                data={this.props.data} 
                label={ (datum) => {
                    return `${datum['firstName']} ${datum['lastName']}`;
                } }
                openCb={this.props.onOpen}/> 
        );
    } 
}

interface Props {
    onOpen(id: number): void
    view: ViewType
    data: UserRecord[];
}

export default UserList;
  
