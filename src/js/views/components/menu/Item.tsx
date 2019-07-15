import * as React from 'react';
import { Link } from 'react-router';

export class Item extends React.Component<ItemProps, void> {
    public render() {
        return ( 
            <li>
                <div className="menu-item">
                    <Link 
                        to={ this.props.href || '#' }
                        onClick={ this.props.onClick }>
                        <span 
                            className={ this.props.selected ? 'hilite' : ''}>
                                { this.props.children }
                        </span>
                    </Link>
                </div>
            </li>
        )
    }
}

export interface ItemProps {
    selected?: boolean
    href?: string
    onClick?(): void 
}