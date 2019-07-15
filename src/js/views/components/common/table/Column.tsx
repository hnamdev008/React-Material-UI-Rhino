import * as React from 'react';
import { connect } from 'react-redux';

export interface ColumnProps {
    head: string
    headKey: string
    linkKey?: string
    bool?: boolean
    dependee?: boolean
    ellipsis?: boolean
}

class Component extends React.Component<ColumnProps, {}> {
    public render() {
        return null;
    }
}

export const Column = connect()(Component);