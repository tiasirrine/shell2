import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Drawer from 'rc-drawer';

import folders from '../data/folders';
import filters from '../data/filters';
import labels from '../data/labels';
import options from '../data/options';
import MailList from 'components/mail/MailList';

import ComposeMail from 'components/mail/Compose/index';
import AppModuleHeader from 'components/AppModuleHeader/index';
import MailDetail from 'components/mail/MailDetail/index';
import {
    fetchMails,
    getAllMail,
    getImportantMail,
    getMailNavFilters,
    getMailNavLabels,
    getNavFolders,
    getReadMail,
    getStarredMail,
    getUnimportantMail,
    getUnreadMail,
    getUnselectedAllMail,
    getUnStarredMail,
    handleMailRequestClose,
    hideMailLoader,
    onAllMailSelect,
    onComposeMail,
    onDeleteMail,
    onFolderMenuItemSelect,
    onFolderSelect,
    onImportantSelect,
    onMailChecked,
    onMailLabelMenuItemSelect,
    onMailLabelSelect,
    onMailOptionMenuSelect,
    onMailSelect,
    onMailSend,
    onMailToggleDrawer,
    onSearchMail,
    onStartSelect,
    setCurrentMailNull,
    updateMailSearch
} from 'actions/Mail';
import IntlMessages from 'util/IntlMessages';
import CircularProgress from 'components/CircularProgress'
import CustomScrollbars from 'util/CustomScrollbars';


class MailWithRedux extends Component {

    MailSideBar = () => {
        return <div className="module-side">

            <div className="module-side-header">
                <div className="module-logo">
                    <i className="zmdi zmdi-email mr-4" />
                    <span><IntlMessages id="mail.mailbox" /></span>
                </div>
            </div>

            <div className="module-side-content">
                <CustomScrollbars className="module-side-scroll scrollbar"
                                  style={{ height: this.props.width >= 1200 ? 'calc(100vh - 200px)' : 'calc(100vh - 80px)' }}>
                    <div className="module-add-task">
                        <Button color="primary" className="btn-block jr-btn"
                                onClick={() => {
                                    this.props.onComposeMail ();
                                }}>
                            <i className="zmdi zmdi-edit mr-3" />
                            <IntlMessages id="mail.compose" /> </Button>
                    </div>

                    <ul className="module-nav">
                        {this.getNavFolders ()}

                        <li className="module-nav-label">
                            <IntlMessages id="mail.filters" />
                        </li>

                        {this.getNavFilters ()}

                        <li className="module-nav-label">
                            <IntlMessages id="mail.labels" />
                        </li>

                        {this.getNavLabels ()}

                    </ul>
                </CustomScrollbars>
            </div>
        </div>
    };

    onDeleteMail = () => {
        this.props.onDeleteMail ();
    };
    getNavFolders = () => {
        return folders.map ((folder, index) =>
            <li key={index} onClick={() => {
                this.props.getNavFolders (folder);
                setTimeout (() => {
                    this.props.hideMailLoader ();
                }, 1500);
            }
            }>
                <a href="javascript:void(0)" className={`${this.props.selectedFolder === folder.id ? 'active' : ''}`}>
                    <i className={`zmdi zmdi-${folder.icon}`} />
                    <span>{folder.title}</span>
                </a>
            </li>
        )
    };
    onFolderMenuItemSelect = (folderId) => {
        this.props.onFolderMenuItemSelect (folderId);
    };
    onLabelMenuItemSelect = (label) => {
        this.props.onMailLabelMenuItemSelect (label);
    };
    handleRequestClose = () => {
        this.props.handleMailRequestClose ();
    };
    getNavFilters = () => {
        return filters.map ((filter, index) =>
            <li key={index} onClick={() => {
                this.props.getMailNavFilters (filter);
                setTimeout (() => {
                    this.props.hideMailLoader ();
                }, 1500);
            }
            }>
                <a href="javascript:void(0)">
                    <i className={`zmdi zmdi-${filter.icon}`} />
                    <span>{filter.title}</span>
                </a>
            </li>
        )
    };

    onFolderMenuToggle = event => {
        this.props.onFolderSelect ();
    };

    onLabelMenuToggle = event => {
        this.props.onMailLabelSelect ();
    };

    onOptionMenuToggle = event => {
        this.props.onMailOptionMenuSelect ();
    };
    onOptionMenuItemSelect = (option) => {
        switch (option.title) {
            case 'All':
                this.props.getAllMail ();
                break;
            case 'None':
                this.props.getUnselectedAllMail ();
                break;
            case 'Read':
                this.props.getReadMail ();
                break;
            case 'Unread':
                this.props.getUnreadMail ();
                break;
            case 'Starred':
                this.props.getStarredMail ();
                break;
            case 'Unstarred':
                this.props.getUnStarredMail ();
                break;
            case 'Important':
                this.props.getImportantMail ();
                break;
            case 'Unimportant':
                this.props.getUnimportantMail ();
                break;
        }
    };
    getAllMail = () => {
        this.props.getAllMail ();
    };
    getUnselectedAllMail = () => {
        this.props.getUnselectedAllMail ();
    };
    getReadMail = () => {
        this.props.getReadMail ();
    };
    getUnreadMail = () => {
        this.props.getUnreadMail ();
    };
    getStarredMail = () => {
        this.props.getStarredMail ();
    };
    getUnStarredMail = () => {
        this.props.getUnStarredMail ();
    };
    getImportantMail = () => {
        this.props.getImportantMail ();
    };
    getUnimportantMail = () => {
        this.props.getUnimportantMail ();
    };

    getNavLabels = () => {
        return labels.map ((label, index) =>
            <li key={index} onClick={() => {
                this.props.getMailNavLabels (label);
                setTimeout (() => {
                    this.props.hideMailLoader ();
                }, 1500);
            }
            }>
                <a href="javascript:void(0)">
                    <i className={`zmdi zmdi-label-alt text-${label.color}`} />
                    <span>{label.title}</span>
                </a>
            </li>
        )
    };

    searchMail = (searchText) => {
        this.props.onSearchMail (searchText);
    };
    displayMail = (currentMail, folderMails, noContentFoundMessage) => {
        return (<div className="module-box-column">
            {currentMail === null ?
                folderMails.length === 0 ?
                    <div className="d-flex align-items-center justify-content-center"
                         style={{ height: this.props.width >= 1200 ? 'calc(100vh - 267px)' : 'calc(100vh - 247px)' }}>
                        {noContentFoundMessage}
                    </div>
                    :
                    <MailList mails={folderMails} onStartSelect={this.onStartSelect.bind (this)}
                              onMailSelect={this.onMailSelect.bind (this)}
                              width={this.props.width}
                              onMailChecked={this.onMailChecked.bind (this)} />
                :
                <MailDetail mail={currentMail} onStartSelect={this.onStartSelect.bind (this)}
                            onImportantSelect={this.onImportantSelect.bind (this)} />}
        </div>)
    };
    getMailActions = () => {
        const { folderMenuState, labelMenuState } = this.props;

        return <div className="d-flex border-0">

            <Dropdown isOpen={folderMenuState}
                      toggle={this.onFolderMenuToggle.bind (this)}>
                <DropdownToggle tag="span">
                    <span className="icon-btn"> <i className="zmdi zmdi-folder" /></span>
                </DropdownToggle>

                <DropdownMenu>
                    {folders.map (folder =>
                        <DropdownItem key={folder.id}
                                      onClick={this.onFolderMenuItemSelect.bind (this, folder.id)}>
                            {folder.title}
                        </DropdownItem>,
                    )}
                </DropdownMenu>
            </Dropdown>

            <span className="icon-btn" onClick={this.onDeleteMail.bind (this)}>
                <i className="zmdi zmdi-delete" />
            </span>

            <Dropdown isOpen={labelMenuState}
                      toggle={this.onLabelMenuToggle.bind (this)}>
                <DropdownToggle tag="span">
                    <span className="icon-btn"><i className="zmdi zmdi-label-alt" /></span>
                </DropdownToggle>

                <DropdownMenu>
                    {labels.map (labels =>
                        <DropdownItem key={labels.title}
                                      onClick={this.onLabelMenuItemSelect.bind (this, labels)}>
                            {labels.title}
                        </DropdownItem>,
                    )}
                </DropdownMenu>
            </Dropdown>

        </div>
    };

    constructor () {
        super ();
    }

    componentDidMount () {
        // only for development
        setTimeout (() => {
            this.props.hideMailLoader ();
        }, 1500);
    }


    onMailChecked (data) {
        this.props.onMailChecked (data);
    }

    onAllMailSelect () {
        const selectAll = this.props.selectedMails <= this.props.folderMails.length;
        if (selectAll) {
            this.getAllMail ();
        } else {
            this.getUnselectedAllMail ();
        }
    }

    onStartSelect (data) {
        this.props.onStartSelect (data);
    }

    onImportantSelect (data) {
        this.props.onImportantSelect (data);
    }

    onMailSend (data) {
        this.props.onMailSend (data);
    }

    onMailSelect (mail) {
        this.props.onMailSelect (mail);
        setTimeout (() => {
            this.props.hideMailLoader ();
        }, 1500);
    }

    updateSearch (evt) {
        this.props.updateMailSearch (evt.target.value);
        this.props.onSearchMail (evt.target.value)
    }

    onToggleDrawer () {
        this.props.onMailToggleDrawer ()
    }

    render () {
        const { drawerState, selectedMails, loader, currentMail, folderMails, composeMail, user, alertMessage, showMessage, noContentFoundMessage, optionMenuState } = this.props;
        return (

            <div className="app-wrapper">
                <div className="animated slideInUpTiny animation-duration-3">
                    <div className="app-module">

                        <div className="d-block d-xl-none">

                            <Drawer
                                touch={true}
                                transitions={true}
                                enableDragHandle={true}
                                open={drawerState}
                                onOpenChange={this.onToggleDrawer.bind (this)}
                                sidebar={this.MailSideBar ()} />

                        </div>
                        <div className="app-module-sidenav d-none d-xl-flex">
                            {this.MailSideBar ()}
                        </div>

                        <div className="module-box">

                            <div className="module-box-header">

                                <span className="icon-btn drawer-btn d-flex d-xl-none"
                                      onClick={this.onToggleDrawer.bind (this)}>
                                    <i className="zmdi zmdi-menu" />
                                </span>
                                <AppModuleHeader placeholder="Search mails" user={this.props.user}
                                                 onChange={this.updateSearch.bind (this)}
                                                 value={this.props.searchMail} />

                            </div>

                            <div className="module-box-content">
                                <div className="module-box-topbar">
                                    {this.props.currentMail === null ?
                                        <div className="d-flex flex-row">

                                            <div className="form-control-checkbox d-flex">
                                                <div className="form-checkbox">
                                                    <input type="checkbox"
                                                           checked={selectedMails > 0}
                                                           onChange={this.onAllMailSelect.bind (this)} />
                                                    <span className="check">
                                                    <i className="zmdi zmdi-check zmdi-hc-lg" />
                                                </span>
                                                </div>
                                            </div>

                                            <Dropdown isOpen={optionMenuState}
                                                      className="d-flex flex-column justify-content-center"
                                                      toggle={this.onOptionMenuToggle}>
                                                <DropdownToggle tag="span" caret>
                                                    <span className="px-2"> {this.props.optionName}</span>
                                                </DropdownToggle>

                                                <DropdownMenu>
                                                    {options.map (option =>
                                                        <DropdownItem key={option.title}
                                                                      onClick={this.onOptionMenuItemSelect.bind (this, option)}>
                                                            {option.title}
                                                        </DropdownItem>,
                                                    )}
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                        :
                                        <span className="icon-btn"
                                              onClick={() => {
                                                  this.props.setCurrentMailNull ();
                                              }}>
                                            <i className="zmdi zmdi-arrow-back" />
                                        </span>
                                    }

                                    <div classID="toolbar-separator" />

                                    {( selectedMails > 0) && this.getMailActions ()}


                                </div>

                                {loader ?
                                    <div className="loader-view"
                                         style={{ height: this.props.width >= 1200 ? 'calc(100vh - 266px)' : 'calc(100vh - 246px)' }}>
                                        <CircularProgress />
                                    </div> : this.displayMail (currentMail, folderMails, noContentFoundMessage)}

                                <ComposeMail open={composeMail} user={user}
                                             onClose={this.handleRequestClose.bind (this)}
                                             onMailSend={this.onMailSend.bind (this)} />

                            </div>
                        </div>
                    </div>


                    {showMessage && NotificationManager.success (alertMessage, this.handleRequestClose ())}
                    <NotificationContainer />

                </div>
            </div>
        )
    }
}


const mapStateToProps = ({ mail, settings }) => {
    const { width } = settings;
    const {
        searchMail,
        noContentFoundMessage,
        alertMessage,
        showMessage,
        drawerState,
        allMail,
        optionName,
        loader,
        currentMail,
        user,
        selectedMails,
        selectedFolder,
        composeMail,
        labelMenuState,
        folderMenuState,
        optionMenuState,
        folderMails
    } = mail;

    return {
        width,
        searchMail,
        noContentFoundMessage,
        alertMessage,
        showMessage,
        drawerState,
        allMail,
        optionName,
        loader,
        currentMail,
        user,
        selectedMails,
        selectedFolder,
        composeMail,
        labelMenuState,
        folderMenuState,
        optionMenuState,
        folderMails
    }
};


export default connect (mapStateToProps, {
    getAllMail,
    fetchMails,
    getImportantMail,
    getMailNavFilters,
    getMailNavLabels,
    getNavFolders,
    getReadMail,
    getStarredMail,
    getUnimportantMail,
    getUnreadMail,
    getUnselectedAllMail,
    getUnStarredMail,
    handleMailRequestClose,
    hideMailLoader,
    onAllMailSelect,
    onComposeMail,
    onDeleteMail,
    onFolderMenuItemSelect,
    onFolderSelect,
    onImportantSelect,
    onMailChecked,
    onMailLabelMenuItemSelect,
    onMailLabelSelect,
    onMailOptionMenuSelect,
    onMailSelect,
    onMailSend,
    onMailToggleDrawer,
    onSearchMail,
    onStartSelect,
    setCurrentMailNull,
    updateMailSearch
}) (MailWithRedux);