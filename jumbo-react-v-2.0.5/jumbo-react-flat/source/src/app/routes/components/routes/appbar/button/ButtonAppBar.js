import React from 'react';
import {Button, Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';
import SearchBox from 'components/SearchBox';

class ButtonAppBar extends React.Component {

    onSearchBoxSelect = () => {
        this.setState({
            searchBox: !this.state.searchBox
        })
    };
    handleRequestClose = () => {
        this.setState({mailNotification: false, appNotification: false, searchBox: false});
    };

    constructor() {
        super();
        this.state = {
            searchBox: false,
            searchText: '',
        }
    }

    updateSearchText(evt) {
        this.setState({
            searchText: evt.target.value,
        });
    }

    render() {
        return (
            <div className="app-main-header">
                <div className="d-flex app-toolbar app-toolbar-special align-items-center">
                    <span className="icon-btn jr-menu-icon">
                        <span className="menu-icon"/>
                    </span>

                    <h4 className="mb-0 mr-auto">Company Name</h4>

                    <SearchBox styleName="d-none d-sm-block"/>

                    <div className="d-inline-block d-sm-none list-inline-item">
                        <Dropdown
                            className="quick-menu nav-searchbox"
                            isOpen={this.state.searchBox}
                            toggle={this.onSearchBoxSelect.bind(this)}>

                            <DropdownToggle
                                className="d-inline-block"
                                tag="span"
                                data-toggle="dropdown">
                                <span className="icon-btn size-30">
                                    <i className="zmdi zmdi-search zmdi-hc-fw"/>
                                </span>
                            </DropdownToggle>

                            <DropdownMenu right className="p-0">
                                <SearchBox styleName="search-dropdown" placeholder=""
                                           onChange={this.updateSearchText.bind(this)}
                                           value={this.state.searchText}/>
                            </DropdownMenu>
                        </Dropdown>
                    </div>

                    <Button size="small" color="primary"
                            className="ml-3 text-center text-white d-none d-sm-block">Login</Button>
                </div>
            </div>
        );
    }
}

export default ButtonAppBar;