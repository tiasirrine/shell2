import React, {Component} from 'react';
import {connect} from 'react-redux'
import Drawer from 'rc-drawer';
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import filters from '../data/filters';
import labels from '../data/labels';
import options from '../data/options';
import ToDoList from 'components/todo/ToDoList';
import ToDoDetail from 'components/todo/ToDoDetail/index';
import AppModuleHeader from 'components/AppModuleHeader/index';
import CircularProgress from 'components/CircularProgress'
import {
    fetchTodo,
    fetchTodoConversation,
    getAllTodo,
    getImportantToDo,
    getNavFilters,
    getNavLabels,
    getStarredToDo,
    getUnimportantToDo,
    getUnselectedAllTodo,
    getUnStarredTodo,
    handleToDoMenuRequestClose,
    hideToDoLoader,
    onDeleteToDo,
    onLabelMenuItemSelect,
    onLabelSelect,
    onLabelUpdate,
    onMarkAsStart,
    onOptionMenuSelect,
    onSearchTodo,
    onSortEnd,
    onTodoAdd,
    onTodoChecked,
    onTodoSelect,
    onToDoUpdate,
    selectAllTodo,
    setCurrentToDoNull,
    toDoToggleDrawer,
    updateSearch
} from 'actions/ToDo';
import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';


class ToDoWithRedux extends Component {
    onSortEnd = ({oldIndex, newIndex}) => {
        this.props.onSortEnd({oldIndex, newIndex});
    };

    onLabelToggle = event => {
        this.props.onLabelSelect();
    };


    onOptionMenuToggle = event => {
        this.props.onOptionMenuSelect();
    };

    handleRequestClose = event => {
        this.props.handleToDoMenuRequestClose();
    };

    onOptionMenuItemSelect = (option) => {
        switch (option.title) {
            case 'All':
                this.props.selectAllTodo();
                break;
            case 'None':
                this.props.getUnselectedAllTodo();
                break;
            case 'Starred':
                this.props.getStarredToDo();
                break;
            case 'Unstarred':
                this.props.getUnStarredTodo();
                break;
            case 'Important':
                this.props.getImportantToDo();
                break;
            case 'Unimportant':
                this.props.getUnimportantToDo();
                break;
        }
    };
    onLabelMenuItemSelect = (label) => {
        this.props.onLabelMenuItemSelect(label);

    };
    onLabelUpdate = (data, label) => {
        this.props.onLabelUpdate({data, label});
    };
    onToDoUpdate = (data) => {
        this.props.onToDoUpdate(data);
    };
    onMarkAsStart = (data) => {
        this.props.onMarkAsStart(data);
    };


    onDeleteToDo = (data) => {
        this.props.onDeleteToDo(data);
    };

    onSearchTodo = (searchText) => {
        this.props.onSearchTodo(searchText);
    };

    onTodoChecked = (data) => {
        this.props.onTodoChecked(data);
    };

    onAllTodoSelect = () => {
        const selectAll = this.props.selectedToDos < this.props.toDos.length;
        if (selectAll) {
            this.props.selectAllTodo();
        } else {
            this.props.getUnselectedAllTodo();
        }
    };

    onTodoAdd = (data) => {
        this.props.onTodoAdd(data);
    };

    onTodoSelect = (todo) => {
        this.props.onTodoSelect(todo);
        setTimeout(() => {
            this.props.hideToDoLoader();
        }, 1500);
    };

    removeLabel = (todo, label) => {
        todo.labels.splice(todo.labels.indexOf(label), 1);
        return todo.labels;
    };

    addLabel = (todo, label) => {
        todo.labels = todo.labels.concat(label);
        return todo.labels
    };

    onToggleDrawer = () => {
        this.props.toDoToggleDrawer();
    };

    updateSearch = (evt) => {
        this.props.updateSearch(evt.target.value);
        this.onSearchTodo(evt.target.value)
    };

    getNavFilters = () => {
        return filters.map((filter, index) =>
            <li key={index} onClick={() => {
                this.props.getNavFilters(filter);
                setTimeout(() => {
                    this.props.hideToDoLoader();
                }, 1500);
            }
            }>
                <a href="javascript:void(0)" className={filter.id === this.props.selectedSectionId ? 'active' : ''}>
                    <i className={`zmdi zmdi-${filter.icon}`}/>
                    <span>{filter.title}</span>
                </a>
            </li>
        )
    };
    getNavLabels = () => {
        return labels.map((label, index) =>
            <li key={index} onClick={() => {
                this.props.getNavLabels(label);
                setTimeout(() => {
                    this.props.hideToDoLoader();
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
    ToDoSideBar = () => {
        return <div className="module-side">
            <div className="module-side-header">
                <div className="module-logo">
                    <i className="zmdi zmdi-email mr-4"/>
                    <span><IntlMessages id="sidebar.appModule.toDo"/></span>
                </div>

            </div>
            <div className="module-side-content">
                <CustomScrollbars className="module-side-scroll scrollbar"
                                  style={{height: this.props.width >= 1200 ? 'calc(100vh - 200px)' : 'calc(100vh - 80px)'}}>
                    <div className="module-add-task">
                        <Button color="primary" className="btn-block jr-btn" onClick={() => {
                            this.setState({addTodo: true})
                        }}> <IntlMessages id="todo.addTask"/> </Button>
                    </div>
                    <ul className="module-nav">

                        <li onClick={() => {
                            this.props.getAllTodo();
                        }
                        }>
                            <a href="javascript:void(0)">
                                <i className="zmdi zmdi-menu"/>
                                <span><IntlMessages id="todo.all"/></span>
                            </a>
                        </li>

                        <li className="module-nav-label">
                            <IntlMessages id="todo.filters"/>
                        </li>

                        {this.getNavFilters()}

                        <li className="module-nav-label">
                            <IntlMessages id="todo.labels"/>
                        </li>

                        {this.getNavLabels()}

                    </ul>
                </CustomScrollbars>
            </div>
        </div>
    };
    showToDos = ({currentTodo, toDos, conversation, user}) => {
        return currentTodo === null ?
            <ToDoList toDos={toDos} onSortEnd={this.onSortEnd}
                      onTodoSelect={this.onTodoSelect.bind(this)}
                      width={this.props.width}
                      onMarkAsStart={this.onMarkAsStart.bind(this)}
                      onTodoChecked={this.onTodoChecked.bind(this)} useDragHandle={true}/>
            :
            <ToDoDetail todo={currentTodo} user={user}
                        conversation={conversation}
                        width={this.props.width}
                        onLabelUpdate={this.onLabelUpdate.bind(this)}
                        onToDoUpdate={this.onToDoUpdate.bind(this)}
                        onDeleteToDo={this.onDeleteToDo.bind(this)}/>;
    };

    constructor() {
        super();
        this.state = {}
    }

    componentWillMount() {
        // this.props.fetchTodo();
        // this.props.fetchTodoConversation();
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.hideToDoLoader();
        }, 1500);
    }

    render() {
        const {drawerState, selectedToDos, loader, currentTodo, toDos, conversation, user, alertMessage, showMessage, optionMenuState, labelMenuState} = this.props;

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
                                sidebar={this.ToDoSideBar()}/>

                        </div>
                        <div className="app-module-sidenav d-none d-xl-flex">
                            {this.ToDoSideBar()}
                        </div>

                        <div className="module-box">
                            <div className="module-box-header">

                                <span className="icon-btn drawer-btn d-flex d-xl-none"
                                      onClick={this.onToggleDrawer.bind(this)}>
                                    <i className="zmdi zmdi-menu"/>
                                </span>
                                <AppModuleHeader placeholder="Search To Do" user={this.props.user}
                                                 onChange={this.updateSearch.bind(this)}
                                                 value={this.props.searchTodo}/>
                            </div>
                            <div className="module-box-content">
                                {this.props.currentTodo === null ?
                                    <div className="module-box-topbar module-box-topbar-todo d-flex flex-row">

                                        <div className="form-control-checkbox d-flex">
                                            <div className="form-checkbox">
                                                <input type="checkbox"
                                                       checked={selectedToDos > 0}
                                                       onChange={this.onAllTodoSelect.bind(this)}/>

                                                <span className="check">
                                                    <i className="zmdi zmdi-check zmdi-hc-lg"/>
                                                </span>
                                            </div>
                                        </div>

                                        <Dropdown
                                            className="d-flex justify-content-center flex-column"
                                            isOpen={optionMenuState}
                                            toggle={this.onOptionMenuToggle.bind(this)}>
                                            <DropdownToggle tag="span" caret>
                                                <span className="px-2"> {this.props.optionName}</span>
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

                                        <div classID="toolbar-separator"/>

                                        {( selectedToDos > 0) &&
                                        <Dropdown
                                            className="d-flex flex-column justify-content-center"
                                            isOpen={labelMenuState}
                                            toggle={this.onLabelToggle.bind(this)}>
                                            <DropdownToggle tag="span">
                                                <span className="icon-btn"><i className="zmdi zmdi-label-alt"/></span>
                                            </DropdownToggle>

                                            <DropdownMenu>
                                                {labels.map(label =>
                                                    <DropdownItem key={label.title}
                                                                  onClick={this.onLabelMenuItemSelect.bind(this, label)}>
                                                        {label.title}
                                                    </DropdownItem>,
                                                )}
                                            </DropdownMenu>
                                        </Dropdown>}
                                    </div>
                                    :
                                    <div className="module-box-topbar">
                                        <span className="icon-btn"
                                              onClick={() => {
                                                  this.props.setCurrentToDoNull();
                                              }}>
                                            <i className="zmdi zmdi-arrow-back"/>
                                        </span>
                                    </div>
                                }


                                {loader ?
                                    <div className="loader-view"
                                         style={{height: this.props.width >= 1200 ? 'calc(100vh - 265px)' : 'calc(100vh - 245px)'}}>
                                        <CircularProgress/>
                                    </div> :
                                    this.showToDos(this.props)
                                }
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

const mapStateToProps = ({toDo, settings}) => {
    const {width} = settings;
    const {
        searchTodo,
        alertMessage,
        loader,
        showMessage,
        drawerState,
        allToDos,
        optionName,
        currentTodo,
        user,
        selectedToDos,
        labelMenuState,
        optionMenuState,
        toDos,
        filter,
        todoConversation,
        conversation
    } = toDo;
    return {
        width,
        searchTodo,
        alertMessage,
        loader,
        showMessage,
        drawerState,
        allToDos,
        optionName,
        currentTodo,
        user,
        selectedToDos,
        labelMenuState,
        optionMenuState,
        toDos,
        filter,
        todoConversation,
        conversation
    }
};


export default connect(mapStateToProps, {
    getAllTodo,
    fetchTodo,
    fetchTodoConversation,
    getImportantToDo,
    getNavFilters,
    getNavLabels,
    getStarredToDo,
    getUnimportantToDo,
    getUnselectedAllTodo,
    getUnStarredTodo,
    handleToDoMenuRequestClose,
    hideToDoLoader,
    onDeleteToDo,
    onLabelMenuItemSelect,
    onLabelSelect,
    onLabelUpdate,
    onOptionMenuSelect,
    onSearchTodo,
    onSortEnd,
    onTodoAdd,
    onTodoChecked,
    onTodoSelect,
    onToDoUpdate,
    onMarkAsStart,
    selectAllTodo,
    setCurrentToDoNull,
    toDoToggleDrawer,
    updateSearch
})(ToDoWithRedux);