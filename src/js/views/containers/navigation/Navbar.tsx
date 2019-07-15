import * as React from 'react';
import { connect } from 'react-redux';
import { MenuBar } from '../../components/menu/MenuBar';
import { Menu } from '../../components/menu/Menu';
import { Item } from '../../components/menu/Item';
import { AppState } from '../../../model/state/AppState';
import { MenuState } from '../../../model/state/menu/MenuState';
import { NaviAction } from '../../../actions/navigation/NaviAction';
import { Dir } from '../../../common/Constants';
import IconButton from 'material-ui/IconButton';
import Settings from 'material-ui/svg-icons/action/settings';
import { Identity } from '../../../security/Identity'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import MailOutline from 'material-ui/svg-icons/communication/mail-outline';
import { Link } from 'react-router';

class Container extends React.Component<Props, void> {
    public render() {
        if(Identity.isLoggedIn()) { 
            return (
                <div>
                <MenuBar>
                    <Menu 
                        selected={ this.props.state.projects.selected }
                        onClick={ this.onProjectsClick }>
                            <span>Projects</span>
                            <Item href={ Dir.CLIENTS }>
                                    Clients
                            </Item>
                            <Item href={ Dir.CAMPAIGN }>
                                    Campaigns
                            </Item>
                            <Item href={ Dir.ENGAGEMENTS }>
                                    Engagements
                            </Item>
                            <Item href={ Dir.TARGET_LISTS }>
                                    Target Lists
                            </Item>
                            <Item href="/">
                                    Reports
                            </Item>
                    </Menu>

                    <Menu 
                        selected={ this.props.state.engagements.selected }
                        onClick={ this.onEngagementsClick }>
                            <span>Engagements</span>
                            <Item href={ Dir.ENGAGEMENTS }>
                                    Engagements
                            </Item>
                            <Item href="">
                                    Phishing Results
                            </Item>
                            <Item href={ Dir.O_AUTH_RESULTS }>
                                    OAuth Results
                            </Item>
                            <Item href={ Dir.PLUNDER }>
                                    OAuth Plunder
                            </Item>
                    </Menu>

                    <Menu 
                        selected={ this.props.state.logs.selected }
                        onClick={ this.onLogsClick }>
                            <span>Logs</span>
                            <Item href={ Dir.VECTOR_EMAIL }>
                                    Email Log
                            </Item>
                            <Item href="">
                                    HTTP logs
                            </Item>
                    </Menu>

                    <Menu 
                        selected={ this.props.state.assets.selected }
                        onClick={ this.onAssetsClick }>
                            <span>Assets</span>
                            <Item href={ Dir.PHISHING_DOMAIN }>
                                    Domains
                            </Item>
                            <Item href={ Dir.LANDING_PAGES }>
                                    Landing Pages
                            </Item>
                            <Item href={ Dir.REDIRECT_PAGES }>
                                    Redirect Pages
                            </Item>
                            <Item href={ Dir.SCHEDULE }>
                                    Schedules
                            </Item>
                            <Item href={ Dir.EMAIL_SERVER }>
                                    Mail Servers
                            </Item>
                            <Item href={ Dir.EMAIL_TEMPLATES }>
                                    Email Templates
                            </Item>
                            <Item href={ Dir.O_AUTH_CONSUMERS }>
                                    OAuth Accounts
                            </Item>
                    </Menu>

                    <Menu 
                        selected={ this.props.state.tools.selected }
                        onClick={ this.onToolsClick }>
                            <span>Tools</span>
                            <Item href={ Dir.SHOAL_SCRAPE_TASKS }>
                                    Shoalscrape Results
                            </Item>
                            <Item href={ Dir.SHOAL_SCRAPE_CREDS }>
                                    Shoalscrape Crednetials
                            </Item>
                            <Item href={ Dir.SCRAPER_USER_AGENTS }>
                                    Scraper Useragents
                            </Item>
                    </Menu>
                    
                        <IconMenu
                                className={`icon-menu-item ${this.props.state.mail.selected ? 'icon-menu-item-selected' : ''}`}
                                iconButtonElement={<IconButton><MailOutline /></IconButton>}
                                anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                                targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                                onTouchTap={ this.onMailClick }
                                 menuStyle={{ backgroundColor: '#1C1C26', border: '1px solid white' }}
                                 animated={true}>
                                { null }
                        </IconMenu>

                        <IconMenu
                                className={`icon-menu-item ${this.props.state.config.selected ? 'icon-menu-item-selected' : ''}`}
                                iconButtonElement={<IconButton><Settings /></IconButton>}
                                anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                                targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                                menuStyle={{ backgroundColor: '#1C1C26', border: '1px solid white' }}
                                onTouchTap={ this.onConfigClick }
                                onRequestChange={(open)=> !open && this.offConfigClick() }
                                touchTapCloseDelay={1} 
                                animated={true}>
                                        <MenuItem 
                                                primaryText="Users" 
                                                containerElement={<Link to={Dir.USERS} />} />
                                        <MenuItem primaryText="Data Management" />
                        </IconMenu>
                        <IconMenu
                                className={`icon-menu-item ${this.props.state.identity.selected ? 'icon-menu-item-selected' : '' }`}
                                iconButtonElement={<IconButton><AccountCircle /></IconButton>}
                                anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                                targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                                onTouchTap={ this.onIdentityClick }
                                onRequestChange={(open)=> !open && this.offIdentityClick() }
                                touchTapCloseDelay={1} 
                                menuStyle={{ backgroundColor: '#1C1C26', border: '1px solid white' }}
                                animated={true}>
                                        <MenuItem 
                                                primaryText="Profile"
                                                containerElement={<Link to={Dir.PROFILE} />} />
                                        <MenuItem 
                                                primaryText="Logout" 
                                                onTouchTap={this.onLogoutClick}/>
                        </IconMenu>

                </MenuBar>
                        
                </div>
            );
        } else {
            return (
                <MenuBar>
                    <Menu 
                        selected={ this.props.state.identity.selected }
                        onClick={ this.onIdentityClick }>
                            <span>Skiff</span>
                            <Item href="/login">
                                    Login
                            </Item>
                    </Menu>
                </MenuBar>
            );
        }
    }

    private offIdentityClick = () => {
            NaviAction
                .unclickIdentity(this.props.dispatch);
    }

    private onIdentityClick = () => {
        NaviAction
            .clickIdentity(this.props.dispatch);
    }

    private onProjectsClick = () => {
        NaviAction
            .clickProjects(this.props.dispatch);
    }

    private onEngagementsClick = () => {
        NaviAction
            .clickEngagements(this.props.dispatch);
    }

    private onLogsClick = () => {
        NaviAction
            .clickLogs(this.props.dispatch);
    }

    private onAssetsClick = () => {
        NaviAction
            .clickAssets(this.props.dispatch);
    }

    private onConfigClick = () => {
        NaviAction
            .clickConfig(this.props.dispatch);
    }

    private offConfigClick = () => {
        NaviAction
            .unclickConfig(this.props.dispatch);
    }

    private onLogoutClick = () => {
        NaviAction
            .logout(this.props.dispatch);
    }

    private onToolsClick = () => {
        NaviAction
            .clickTools(this.props.dispatch);
    }

    private onMailClick = () => {
        NaviAction
            .clickMail(this.props.dispatch);
    }
}

interface Props {
    dispatch?
    state?: MenuState
}

const mapStateToProps = (state: AppState): Props => {    
    return {
        state: state.navigation
    }
};

const mapDispatchToProps = (dispatch): Props => ({
    dispatch: dispatch
});

export const Navbar = connect(mapStateToProps, mapDispatchToProps)(Container);
