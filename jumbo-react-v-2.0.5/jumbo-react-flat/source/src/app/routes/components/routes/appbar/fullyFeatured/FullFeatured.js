import React from 'react';
import {Button, Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';
import SearchBox from 'components/SearchBox';

class FullFeatured extends React.Component {

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
                <div className="d-flex app-toolbar align-items-center">
                    <span className="icon-btn jr-menu-icon">
                        <span className="menu-icon"/>
                    </span>

                    <h4 className="mb-0 mr-auto">Company Name</h4>

                    <SearchBox styleName="d-none d-sm-block"/>

                    <Button size="small" color="primary" className="ml-3 text-white d-none d-sm-block">Login</Button>

                    <div className="d-inline-block d-sm-none list-inline-item">
                        <Dropdown
                            className="quick-menu nav-searchbox"
                            isOpen={this.state.searchBox}
                            toggle={this.onSearchBoxSelect.bind(this)}>

                            <DropdownToggle
                                className="d-inline-block"
                                tag="span"
                                data-toggle="dropdown">
                                <span className="icon-btn icon-btn size-30">
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

                    <ul className="header-notifications list-inline ml-3 d-none d-sm-block">

                        <li className="list-inline-item pointer">
                            <i className="zmdi zmdi-notifications-active zmdi-hc-lg zmdi-hc-fw"/>
                        </li>
                        <li className="list-inline-item pointer">
                            <i className="zmdi zmdi-comment-alt-text zmdi-hc-lg zmdi-hc-fw"/>
                        </li>
                    </ul>

                    <img className="avatar-sm rounded-circle ml-3 ml-lg-5 d-none d-sm-block pointer" alt="Remy Sharp"
                         src="http://via.placeholder.com/150x150"/>
                </div>
            </div>
        );
    }
}

export default FullFeatured;