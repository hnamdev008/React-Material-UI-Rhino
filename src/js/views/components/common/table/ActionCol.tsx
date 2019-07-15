import * as React from 'react';
import { connect } from 'react-redux';

export interface ActionProps {
    edit?: boolean,
    editCallback?(id: number): void,
    remove?: boolean
    removeCallback?(id: number): void
} 

export class ActionCol extends React.Component<ActionProps, {}> {
    public render() {
        return <div>ACTION</div>
    }
}