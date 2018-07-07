import React, {Component} from 'react';
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Drawer from 'rc-drawer';
import {connect} from 'react-redux';

import mails from '../data/mails';
import folders from '../data/folders';
import filters from '../data/filters';
import labels from '../data/labels';
import options from '../data/options';
import MailList from 'components/mail/MailList';

import ComposeMail from 'components/mail/Compose/index';
import AppModuleHeader from 'components/AppModuleHeader/index';
import MailDetail from 'components/mail/MailDetail/index';
import IntlMessages from 'util/IntlMessages';
import CircularProgress from 'components/CircularProgress'
import CustomScrollbars from 'util/CustomScrollbars';

class Mail extends Component {

    toggle = () => {
        this.setState({menuState: !this.state.menuState});
    };

    MailSideBar = () => {
        return <div className="module-side">

            <div className="module-side-header">
                <div className="module-logo">
                    <i className="zmdi zmdi-email mr-3"/>
                    <span><IntlMessages id="mail.mailbox"/></span>
                </div>

            </div>

            <div className="module-side-content">
                <CustomScrollbars className="module-side-scroll scrollbar"
                                  style={{height: this.props.width >= 1200 ? 'calc(100vh - 200px)' : 'calc(100vh - 80px)'}}>
                    <div className="module-add-task">
                        <Button color="primary" className="btn-block jr-btn"
                                onClick={() => {
                                    this.setState({composeMail: true})
                                }}>
                            <i className="zmdi zmdi-edit zmdi-hc-fw"/>
                            <IntlMessages id="mail.compose"/> </Button>
                    </div>

                    <ul className="module-nav">

                        {this.getNavFolders()}

                        <li className="module-nav-label">
                            <IntlMessages id="mail.filters"/>
                        </li>

                        {this.getNavFilters()}

                        <li className="module-nav-label">
                            <IntlMessages id="mail.labels"/>
                        </li>

                        {this.getNavLabels()}

                    </ul>
                </CustomScrollbars>
            </div>
        </div>
    };

    onDeleteMail = () => {
        const mails = this.state.allMail.map(mail =>
            mail.selected && (mail.folder === this.state.selectedFolder) ?
                {...mail, folder: 4, selected: false,} : mail
        );
        this.setState({
            alertMessage: 'Mail Deleted Successfully',
            showMessage: true,
            selectedMails: 0,
            allMail: mails,
            folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
        });
    };

    getNavFolders = () => {
        return folders.map((folder, index) =>
            <li key={index} onClick={() => {
                const filterMails = this.state.allMail.filter(mail => mail.folder === folder.id);
                this.setState({
                    selectedFolder: folder.id,
                    noContentFoundMessage: 'No mail found in selected folder',
                    currentMail: null,
                    loader: true,
                    folderMails: filterMails
                });
                setTimeout(() => {
                    this.setState({loader: false});
                }, 1500);
            }
            }>
                <a href="javascript:void(0)" className={`${this.state.selectedFolder === folder.id ? 'active' : ''}`}>
                    <i className={`zmdi zmdi-${folder.icon}`}/>
                    <span>{folder.title}</span>
                </a>
            </li>
        )
    };

    onFolderMenuItemSelect = (folderId) => {
        this.handleRequestClose();
        const mails = this.state.allMail.map(mail =>
            mail.selected && (mail.folder === this.state.selectedFolder) ?
                {...mail, folder: folderId, selected: false,} : mail
        );
        this.setState({
            selectedMails: 0,
            allMail: mails,
            noContentFoundMessage: 'No mail found in selected folder',
            alertMessage: 'Mail has been moved successfully',
            showMessage: true,
            folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
        });
    };

    onLabelMenuItemSelect = (label) => {
        this.handleRequestClose();
        const mails = this.state.allMail.map(mail => {
                if (mail.selected && (mail.folder === this.state.selectedFolder)) {
                    if (mail.labels.includes(label.id)) {
                        return {...mail, labels: this.removeLabel(mail, label.id)};
                    } else {
                        return {...mail, labels: this.addLabel(mail, label.id)};
                    }
                } else {
                    return mail;
                }
            }
        );
        this.setState({
            noContentFoundMessage: 'No mail found in selected label',
            alertMessage: 'Label Updated Successfully',
            showMessage: true,
            allMail: mails,
            folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
        });
    };

    handleRequestClose = () => {
        this.setState({
            composeMail: false,
            showMessage: false,
            folderMenuState: false,
            labelMenuState: false,
            optionMenuState: false
        });
    };

    getNavFilters = () => {
        return filters.map((filter, index) =>
            <li key={index} onClick={() => {
                const filterMails = this.state.allMail.filter(mail => {
                    if (filter.id === 0 && mail.starred) {
                        return mail
                    } else if (filter.id === 1 && mail.important) {
                        return mail
                    }
                });
                this.setState({
                    noContentFoundMessage: 'No mail found in selected filter',
                    loader: true,
                    folderMails: filterMails
                });
                setTimeout(() => {
                    this.setState({loader: false});
                }, 1500);
            }
            }>
                <a href="javascript:void(0)">
                    <i className={`zmdi zmdi-${filter.icon}`}/>
                    <span>{filter.title}</span>
                </a>
            </li>
        )
    };

    onFolderToggle = event => {
        this.setState({
            folderMenuState: !this.state.folderMenuState
        })
    };

    onLabelMenuToggle = event => {
        this.setState({
            labelMenuState: !this.state.labelMenuState
        })
    };

    onOptionMenuToggle = event => {
        this.setState({
            optionMenuState: !this.state.optionMenuState
        })
    };

    onOptionMenuItemSelect = (option) => {
        switch (option.title) {
            case 'All':
                this.handleRequestClose();
                this.getAllMail();
                break;
            case 'None':
                this.handleRequestClose();
                this.getUnselectedAllMail();
                break;
            case 'Read':
                this.handleRequestClose();
                this.getReadMail();
                break;
            case 'Unread':
                this.handleRequestClose();
                this.getUnreadMail();
                break;
            case 'Starred':
                this.handleRequestClose();
                this.getStarredMail();
                break;
            case 'Unstarred':
                this.handleRequestClose();
                this.getUnStarredMail();
                break;
            case 'Important':
                this.handleRequestClose();
                this.getImportantMail();
                break;
            case 'Unimportant':
                this.handleRequestClose();
                this.getUnimportantMail();
                break;
        }
    };

    getAllMail = () => {
        let mails = this.state.allMail.map((mail) => mail.folder === this.state.selectedFolder ? {
            ...mail,
            selected: true
        } : mail);
        this.setState({
            selectedMails: mails.length,
            allMail: mails,
            optionName: 'All',
            folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
        });
    };

    getUnselectedAllMail = () => {
        let mails = this.state.allMail.map((mail) => mail.folder === this.state.selectedFolder ? {
            ...mail,
            selected: false
        } : mail);
        this.setState({
            selectedMails: 0,
            allMail: mails,
            optionName: 'None',
            folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
        });
    };

    getReadMail = () => {
        let selectedMail = 0;
        let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder);
        mails = mails.map((mail) => {
            if (mail.read) {
                selectedMail++;
                return {...mail, selected: true};
            }
            return {...mail, selected: false}
        });
        this.setState({
            selectedMails: selectedMail,
            allMail: mails,
            optionName: 'Read',
            folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
        });
        return mails;
    };

    getUnreadMail = () => {
        let selectedMail = 0;
        let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder);
        mails = mails.map((mail) => {
            if (!mail.read) {
                selectedMail++;
                return {...mail, selected: true};
            }
            return {...mail, selected: false}
        });
        this.setState({
            selectedMails: selectedMail,
            allMail: mails,
            optionName: 'Unread',
            folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
        });
        return mails;
    };

    getStarredMail = () => {
        let selectedMail = 0;
        let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder);
        mails = mails.map((mail) => {
            if (mail.starred) {
                selectedMail++;
                return {...mail, selected: true};
            }
            return {...mail, selected: false}
        });
        this.setState({
            selectedMails: selectedMail,
            allMail: mails,
            optionName: 'Starred',
            folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
        });
        return mails;
    };

    getUnStarredMail = () => {
        let selectedMail = 0;
        let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder);
        mails = mails.map((mail) => {
            if (!mail.starred) {
                selectedMail++;
                return {...mail, selected: true};
            }
            return {...mail, selected: false}
        });
        this.setState({
            selectedMails: selectedMail,
            allMail: mails,
            optionName: 'UnStarred',
            folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
        });
        return mails;
    };

    getImportantMail = () => {
        let selectedMail = 0;
        let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder);
        mails = mails.map((mail) => {
            if (mail.important) {
                selectedMail++;
                return {...mail, selected: true};
            }
            return {...mail, selected: false}
        });
        this.setState({
            selectedMails: selectedMail,
            allMail: mails,
            optionName: 'Important',
            folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
        });
        return mails;
    };

    getUnimportantMail = () => {
        let selectedMail = 0;
        let mails = this.state.allMail.filter(mail => mail.folder === this.state.selectedFolder);
        mails = mails.map((mail) => {
            if (!mail.important) {
                selectedMail++;
                return {...mail, selected: true};
            }
            return {...mail, selected: false}
        });
        this.setState({
            selectedMails: selectedMail,
            optionName: 'Unimportant',
            allMail: mails,
            noContentFoundMessage: 'No Mail found in selected Label',
            folderMails: mails.filter(mail => mail.folder === this.state.selectedFolder)
        });
        return mails;
    };

    getNavLabels = () => {
        return labels.map((label, index) =>
            <li key={index} onClick={() => {
                const filterMails = this.state.allMail.filter(mail => mail.labels.includes(label.id));
                this.setState({
                    loader: true,
                    noContentFoundMessage: 'No mail found in selected label',
                    folderMails: filterMails
                });
                setTimeout(() => {
                    this.setState({loader: false});
                }, 1500);
            }
            }>
                <a href="javascript:void(0)">
                    <i className={`zmdi zmdi-circle text-${label.color}`}/>
                    <span>{label.title}</span>
                </a>
            </li>
        )
    };

    searchMail = (searchText) => {
        if (searchText === '') {
            this.setState({folderMails: this.state.allMail.filter((mail) => !mail.deleted)});
        } else {
            const searchMails = this.state.allMail.filter((mail) =>
                !mail.deleted && mail.subject.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
            this.setState({
                folderMails: searchMails
            });
        }
    };

    displayMail = (currentMail, folderMails, noContentFoundMessage) => {
        return (<div className="module-box-column">
            {currentMail === null ?
                folderMails.length === 0 ?
                    <div className="d-flex align-items-center justify-content-center"
                         style={{height: this.props.width >= 1200 ? 'calc(100vh - 267px)' : 'calc(100vh - 247px)'}}>
                        {noContentFoundMessage}
                    </div>
                    :
                    <MailList mails={folderMails} onStartSelect={this.onStartSelect.bind(this)}
                              onMailSelect={this.onMailSelect.bind(this)}
                              width={this.props.width}
                              onMailChecked={this.onMailChecked.bind(this)}/>
                :
                <MailDetail mail={currentMail}
                            width={this.props.width}
                            onStartSelect={this.onStartSelect.bind(this)}
                            onImportantSelect={this.onImportantSelect.bind(this)}/>}
        </div>)
    };

    getMailActions = () => {
        const {folderMenuState, labelMenuState} = this.state;
        return <div className="d-flex border-0">

            <Dropdown isOpen={folderMenuState}
                      toggle={this.onFolderToggle.bind(this)}>
                <DropdownToggle tag="span">
                    <span className="icon-btn"> <i className="zmdi zmdi-folder"/></span>
                </DropdownToggle>

                <DropdownMenu>
                    {folders.map(folder =>
                        <DropdownItem key={folder.id}
                                      onClick={this.onFolderMenuItemSelect.bind(this, folder.id)}>
                            {folder.title}
                        </DropdownItem>,
                    )}
                </DropdownMenu>
            </Dropdown>

            <span className="icon-btn" onClick={this.onDeleteMail.bind(this)}>
                <i className="zmdi zmdi-delete"/>
            </span>

            <Dropdown isOpen={labelMenuState}
                      toggle={this.onLabelMenuToggle.bind(this)}>
                <DropdownToggle tag="span" onClick={this.onLabelMenuToggle.bind(this)}>
                    <span className="icon-btn">  <i className="zmdi zmdi-label-alt"/></span>
                </DropdownToggle>

                <DropdownMenu>
                    {labels.map(labels =>
                        <DropdownItem key={labels.title}
                                      onClick={this.onLabelMenuItemSelect.bind(this, labels)}>
                            {labels.title}
                        </DropdownItem>,
                    )}
                </DropdownMenu>
            </Dropdown>

        </div>
    };

    constructor() {
        super();
        this.state = {
            menuState: false,
            searchMail: '',
            noContentFoundMessage: 'No mail found in selected folder',
            alertMessage: '',
            showMessage: false,
            drawerState: false,
            optionName: 'None',
            allMail: mails,
            loader: true,
            currentMail: null,
            user: {
                name: 'Robert Johnson',
                email: 'robert@example.com',
                avatar: 'http://via.placeholder.com/150x150'
            },
            selectedMails: 0,
            selectedFolder: 0,
            composeMail: false,
            labelMenuState: false,
            folderMenuState: false,
            optionMenuState: false,
            folderMails: mails.filter(mail => mail.folder === 0)
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loader: false});
        }, 1500);
    }


    onMailChecked(data) {
        data.selected = !data.selected;
        let selectedMail = 0;
        const mails = this.state.folderMails.map(mail => {
                if (mail.selected) {
                    selectedMail++;
                }
                if (mail.id === data.id) {
                    if (mail.selected) {
                        selectedMail++;
                    }
                    return data;
                } else {
                    return mail;
                }
            }
        );
        this.setState({
            selectedMails: selectedMail,
            folderMails: mails
        });
    }

    onAllMailSelect() {
        const selectAll = this.state.selectedMails <= this.state.folderMails.length;
        if (selectAll) {
            this.getAllMail();
        } else {
            this.getUnselectedAllMail();
        }
    }

    removeLabel(mail, label) {
        mail.labels.splice(mail.labels.indexOf(label), 1);
        if (this.state.currentMail !== null && mail.id === this.state.currentMail.id) {
            this.setState({
                currentMail: {...mail, labels: mail.labels}
            })
        }
        return mail.labels;
    }

    onStartSelect(data) {
        data.starred = !data.starred;
        this.setState({
            alertMessage: data.starred ? 'Mail Mark as Star' : 'Mail Remove as Star',
            showMessage: true,
            folderMails: this.state.folderMails.map(mail =>
                mail.id === data.id ?
                    data : mail
            )
        });
    }

    onImportantSelect(data) {
        data.important = !data.important;
        this.setState({
            alertMessage: data.important ? 'Mail Mark as Important' : 'Mail Remove as Important',
            showMessage: true,
            folderMails: this.state.folderMails.map(mail =>
                mail.id === data.id ?
                    data : mail
            )
        });
    }

    onMailSend(data) {
        this.setState(
            {
                alertMessage: 'Mail Sent Successfully',
                showMessage: true,
                folderMails: this.state.allMail.concat(data),
                allMail: this.state.allMail.concat(data)
            }
        );
    }

    onMailSelect(mail) {
        this.setState({
            loader: true,
            currentMail: mail,
        });
        setTimeout(() => {
            this.setState({loader: false});
        }, 1500);
    }

    addLabel(mail, label) {
        if (this.state.currentMail !== null && mail.id === this.state.currentMail.id) {
            this.setState({
                currentMail: {...mail, labels: mail.labels.concat(label)}
            })
        }
        return mail.labels.concat(label)
    }

    updateSearch(evt) {
        this.setState({
            searchMail: evt.target.value,
        });
        this.searchMail(evt.target.value)
    }

    onToggleDrawer() {
        this.setState({
            drawerState: !this.state.drawerState
        });
    }

    render() {
        const {selectedMails, drawerState, loader, currentMail, folderMails, composeMail, user, alertMessage, showMessage, noContentFoundMessage, optionMenuState} = this.state;
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
                                onOpenChange={this.onToggleDrawer.bind(this)}
                                sidebar={this.MailSideBar()}/>

                        </div>
                        <div className="app-module-sidenav d-none d-xl-flex">
                            {this.MailSideBar()}
                        </div>

                        <div className="module-box">

                            <div className="module-box-header">

                                <span className="icon-btn drawer-btn d-flex d-xl-none"
                                      onClick={this.onToggleDrawer.bind(this)}>
                                    <i className="zmdi zmdi-menu"/>
                                </span>
                                <AppModuleHeader placeholder="Search mails" user={this.state.user}
                                                 onChange={this.updateSearch.bind(this)}
                                                 value={this.state.searchMail}/>

                            </div>

                            <div className="module-box-content">
                                <div className="module-box-topbar">
                                    {this.state.currentMail === null ?
                                        <div className="d-flex flex-row">
                                            <div className="form-control-checkbox d-flex">
                                                <div className="form-checkbox">
                                                    <input type="checkbox"
                                                           checked={selectedMails > 0}
                                                           onChange={this.onAllMailSelect.bind(this)}/>

                                                    <span className="check">
                                                        <i className="zmdi zmdi-check zmdi-hc-lg"/>
                                                    </span>
                                                </div>
                                            </div>

                                            <Dropdown isOpen={optionMenuState}
                                                      className="d-flex flex-column justify-content-center"
                                                      toggle={this.onOptionMenuToggle.bind(this)}>
                                                <DropdownToggle tag="span"
                                                                caret>
                                                    <span className="px-2"> {this.state.optionName}</span>
                                                </DropdownToggle>

                                                <DropdownMenu>
                                                    {options.map(option =>
                                                        <DropdownItem key={option.title}
                                                                      onClick={this.onOptionMenuItemSelect.bind(this, option)}>
                                                            {option.title}
                                                        </DropdownItem>,
                                                    )}
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                        :
                                        <span className="icon-btn"
                                              onClick={() => {
                                                  this.setState({
                                                      currentMail: null
                                                  })
                                              }}>
                                            <i className="zmdi zmdi-arrow-back"/>
                                        </span>
                                    }

                                    <div className="toolbar-separator"/>

                                    {(selectedMails > 0) && this.getMailActions()}

                                </div>

                                {loader ?
                                    <div className="loader-view"
                                         style={{height: this.props.width >= 1200 ? 'calc(100vh - 266px)' : 'calc(100vh - 246px)'}}>
                                        <CircularProgress/>
                                    </div> : this.displayMail(currentMail, folderMails, noContentFoundMessage)}

                                <ComposeMail open={composeMail} user={user}
                                             onClose={this.handleRequestClose.bind(this)}
                                             onMailSend={this.onMailSend.bind(this)}/>

                            </div>
                        </div>
                    </div>

                    {showMessage && NotificationManager.success(alertMessage, this.handleRequestClose())}
                    <NotificationContainer/>

                </div>
            </div>
        )
    }
}

const mapStateToProps = ({settings}) => {
    const {width} = settings;
    return {width}
};
export default connect(mapStateToProps)(Mail);