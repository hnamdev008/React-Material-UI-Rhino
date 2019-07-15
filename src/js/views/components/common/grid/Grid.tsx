import * as React from 'react';
import { connect } from 'react-redux';
import { Cell, CellProps } from './Cell';
import Dto from '../../../../model/dto/Dto';

export class Grid extends React.Component<Props, {}> {
    public render() {

        const cells : Array<React.ReactElement<{}>> = this.props.data.map(datum => {
            return <Cell 
                key={datum.id} 
                text={ this.props.label(datum) } 
                cb={ () => this.props.openCb(datum.id) } />
        });

        return (
            <div>
                { cells }
            </div>
        );
    }  
}

interface Props {
    data: Array<any>
    label(datum: any): string
    openCb(id: number): void
}
