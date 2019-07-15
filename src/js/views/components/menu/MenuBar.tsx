import * as React from 'react';
import { Menu, MenuProps } from './Menu';
import { Item, ItemProps } from './Item';
import IconMenu from 'material-ui/IconMenu';

export class MenuBar extends React.Component<void, void> {
    public render() {
        const menuEls = React.Children.map<React.ReactElement<MenuProps>>(this.props.children, child => {
            if(child['type'] == Menu)
                return child as React.ReactElement<MenuProps>;
        });

        const rightHandEls = React.Children.map<React.ReactElement<MenuProps>>(this.props.children, child => {
            if(child['type'] == IconMenu)
                return child as React.ReactElement<any>;
        });

        const selectedMenu = menuEls.filter(el => {
            return el.props.selected;            
        })[0];
               
        const itemEls = selectedMenu && React.Children.map<React.ReactElement<ItemProps>>(selectedMenu.props['children'], child => {
            if(child['type'] == Item)
                return child as React.ReactElement<ItemProps>;
        })


        return (
            <div className="navbar-fixed-top">
                <div id="ribbon">
                    <span id="left-hand-menu">
                        <ul className="list-inline">
                            { menuEls }
                        </ul>
                    </span>
                    <span id="right-hand-menu">{ rightHandEls }</span>
                </div>
                { itemEls && <div id="gutter">
                    <ul className="list-inline">
                        { itemEls }
                    </ul>
                </div> }
            </div> 
        );
    }
}