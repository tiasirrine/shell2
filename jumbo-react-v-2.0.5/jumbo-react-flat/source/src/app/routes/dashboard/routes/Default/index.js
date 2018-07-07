import React, {Component} from 'react';
import {Bar, BarChart, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip} from 'recharts';

import {Button, ListGroup, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';

import classnames from 'classnames';
import MonthlyRevenue from 'components/dashboard/default/MonthlyRevenue';
import {chartDataWithoutAxis} from 'app/routes/dashboard/routes/ECommerce/data'
import {
    cardData,
    cardData1,
    cardData2,
    connections,
    countryList1,
    countryList3,
    data1,
    expanseData,
    todoData,
    weatherList
} from '../data'

import ReportBox from 'components/ReportBox/index';
import InfoCard from 'components/InfoCard';
import InFoWithBgImage from 'components/InFoWithBgImage';
import SimpleToDo from 'components/ToDoCard/index';
import UserDetailTable from 'components/dashboard/Common/UserDetailTable';
import UserProfileCard from 'components/dashboard/Common/userProfileCard/UserProfileCard';
import MarketingTable from 'components/dashboard/Common/MarketingTable';
import RecentActivities from 'components/dashboard/Common/RecentActivities/index';
import {projects, recentList} from '../Intranet/data';
import ProjectsList from 'components/dashboard/Common/ProjectsList';
import CountryListBadges from "components/dashboard/Common/CountryListBadges";
import WeatherList from "components/dashboard/Common/WeatherList";

import {marketingData, pieChartData,} from 'app/routes/dashboard/routes/Default/data';
import ContainerHeader from 'components/ContainerHeader/index';
import CardHeader from 'components/dashboard/Common/CardHeader/index';
import IntlMessages from 'util/IntlMessages';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class Default extends Component {

    constructor() {
        super();
        this.state = {
            activeTab: '1'
        };
        this.toggle = this.toggle.bind(this);
    }


    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div className="dashboard animated slideInUpTiny animation-duration-3">
                <ContainerHeader match={this.props.match} title={<IntlMessages id="sidebar.dashboard"/>}/>

                <div className="row">
                    <div className="col-xl-5 col-12">
                        <div className="jr-card p-0 overflow-hidden">
                            <div className="jr-card-header pt-3 px-4">
                                <h3><IntlMessages id="dashboard.userStatstics"/></h3>
                            </div>
                            <MonthlyRevenue chartData={expanseData}/>
                        </div>
                    </div>

                    <div className="col-xl-7 col-12">
                        <div className="row">
                            <div className="col-xl-8 col-lg-6 col-md-7 col-12">
                                <div className="row">
                                    <div className="col-sm-6 col-12">
                                        <InfoCard data={cardData} styleName="bg-secondary"/>
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <InfoCard data={cardData1} styleName="bg-cyan darken-2"/>
                                    </div>
                                    <div className="col-12">
                                        <InFoWithBgImage data={cardData2}/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-5 col-12">
                                <div
                                    className="card jr-chart-or jr-card-full-height d-flex flex-column justify-content-between">
                                    <div className="chart-header">
                                        <div className="chart-title">
                                            <h3>Orders</h3>
                                            <span className="d-block mb-1 text-muted">25 New Placed</span>
                                            <span className="d-block mb-1 text-muted">13 Processed</span>
                                            <span className="d-block text-muted">07 Pending</span>
                                        </div>
                                    </div>
                                    <ResponsiveContainer width="100%" height={62}>
                                        <LineChart data={data1}>
                                            <Line type="monotone" dataKey="uv" stroke="#3f51b5" fillOpacity={0.8}
                                                  activeDot={{r: 8}}/>
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <UserProfileCard/>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="jr-card jr-card-full-height">

                            <CardHeader heading="New Connections"
                                        subHeading="3 This week" styleName="mb-2"/>

                            <UserDetailTable data={connections}/>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-6 col-12">
                        <div className="jr-card jr-card-full-height">
                            <CardHeader heading={<IntlMessages id="dashboard.recentActivities"/>}
                                        subHeading={<IntlMessages id="dashboard.lastActivity"/>}/>

                            {recentList.map((recentList, index) => <RecentActivities key={index}
                                                                                     recentData={recentList}/>)}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-12">
                        <ReportBox title="$685K+" detail="Post 9 month data">
                            <BarChart height={80} data={chartDataWithoutAxis}>
                                <Bar dataKey='amt' fill='#3f51b5' maxBarSize={10}/>
                            </BarChart>
                        </ReportBox>
                    </div>

                    <div className="col-lg-5 col-sm-8 col-12 order-lg-3 ">
                        <div className="card p-3">
                            <div className="row">
                                <div className="col-sm-4 col-12">
                                    <ResponsiveContainer height={96}>
                                        <PieChart>
                                            <Pie dataKey="amt"
                                                 data={pieChartData} cx="50%" cy="50%"
                                                 innerRadius={27}
                                                 outerRadius={42}
                                                 fill="#3367d6"
                                                 paddingAngle={5}>
                                                {
                                                    pieChartData.map((entry, index) => <Cell key={index}
                                                                                             fill={COLORS[index % COLORS.length]}/>)
                                                }
                                            </Pie>
                                            <Tooltip/>
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="col-sm-8 col-12 text-sm-left text-center align-self-center">
                                    <div className="jr-card-header mb-1">
                                        <h3 className="card-heading"><IntlMessages id="dashboard.googleInsight"/></h3>
                                        <p className="sub-heading"><IntlMessages id="dashboard.lastCalculated"/></p>
                                    </div>
                                    <Button className="jr-btn-sm" color="primary">
                                        <i className="zmdi zmdi-refresh-sync zmdi-hc-fw "/>
                                        <span><IntlMessages id="dashboard.refresh"/></span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-4 col-12">
                        <div
                            className="jr-card px-2 py-5 py-sm-0  height-130 d-flex align-items-center justify-content-center">
                            <div className="text-center">
                                <img className="d-inline-block mb-3" src="http://via.placeholder.com/54x52"
                                     alt="image"/>
                                <h5 className="font-weight-semibold mb-0"><IntlMessages id="dashboard.upgradeToday"/>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="jr-card jr-card-full-height">
                            <div className="jr-card-header mb-3 d-flex">
                                <h3 className="mb-0 mr-auto"><IntlMessages id="dashboard.currentProjects"/></h3>
                                <span className="icon-btn size-30">
                                            <i className="zmdi zmdi-chevron-down zmdi-hc-fw"/>
                                </span>
                            </div>
                            <ProjectsList data={projects}/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="jr-card jr-card-full-height">
                            <div className="jr-card-header d-flex">
                                <div className="mr-auto">
                                    <h3 className="card-heading d-inline-block mb-0"><IntlMessages
                                        id="dashboard.toDoItems"/></h3>
                                </div>

                                <span className="icon-btn size-30">
                                    <i className="zmdi zmdi-chevron-down zmdi-hc-fw"/>
                                </span>
                            </div>
                            <SimpleToDo data={todoData}/>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="jr-card jr-card-full-height">
                            <div className="jr-card-header d-flex mb-3">
                                <h3 className="card-heading mb-0 mr-auto">
                                    <IntlMessages id="dashboard.marketingCampaign"/>
                                </h3>
                                <span className="icon-btn size-30">
                                            <i className="zmdi zmdi-chevron-down zmdi-hc-fw"/>
                                 </span>
                            </div>
                            <MarketingTable data={marketingData}/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8 col-12">
                        <div className="jr-card jr-card-full-height">
                            <div className="jr-card-header d-flex">
                                <div className="mr-auto">
                                    <h3 className="card-heading">Weather Today</h3>
                                    <p className="sub-heading">Monday, 12:45 PM, Mostly Sunny</p>
                                </div>
                                <span className="icon-btn size-30">
                                            <i className="zmdi zmdi-chevron-down zmdi-hc-fw"/>
                                 </span>
                            </div>

                            <div className="jr-card-body">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <div className="temp-section mb-4 mb-sm-0 text-center text-sm-left">
                                            <p>
                                                <i className="detail-icon text-blue-grey wi wi-owm-501"/>

                                            </p>
                                            <h2 className="temp-point">32.3 <sup>0</sup>C</h2>
                                        </div>
                                    </div>
                                    <div className="col-sm-7 text-center text-sm-left">
                                        <ListGroup className="temp-week-list">
                                            {weatherList.map((weather, index) => <WeatherList className="temp-week-list"
                                                                                              key={index}
                                                                                              weather={weather}/>)}
                                        </ListGroup>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="jr-card jr-card-full-height">
                            <p className="sub-heading">Word Of The Day</p>

                            <h2 className="mb-2">Be-nev-o-lent</h2>
                            <span className="text-grey d-inline-block mb-4">adjective</span>

                            <p className="h3 mb-lg-4 mb-3">Well meaning and kindly “a benevolent smile”</p>

                            <a className="card-link" href="javascript:void(0)">Learn More Words</a>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="jr-card">
                            <div className="jr-card-header d-flex justify-content-between">
                                <div>
                                    <h3 className="card-heading">Sales Report</h3>
                                    <p className="sub-heading">This Financial Year</p>
                                </div>

                                <Nav className="nav-pill-sales">
                                    <NavItem>
                                        <NavLink
                                            className={classnames({active: this.state.activeTab === '1'})}
                                            onClick={() => {
                                                this.toggle('1');
                                            }}
                                        >
                                            All
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({active: this.state.activeTab === '2'})}
                                            onClick={() => {
                                                this.toggle('2');
                                            }}>
                                            Europe
                                        </NavLink>
                                    </NavItem>
                                </Nav>


                                <span className="icon-btn size-30">
                                            <i className="zmdi zmdi-chevron-down zmdi-hc-fw"/>
                                 </span>
                            </div>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <div className="row">
                                        <div className="col-xl-3 col-12">

                                            <ResponsiveContainer width="100%" height={130}>
                                                <PieChart>
                                                    <Pie dataKey="amt" data={pieChartData} cx="50%" cy="50%"
                                                         innerRadius={40}
                                                         outerRadius={60}
                                                         fill="#ffc658"/>
                                                    <Tooltip/>
                                                </PieChart>
                                            </ResponsiveContainer>

                                        </div>

                                        <div className="col-xl-9 col-12">
                                            <p className="text-grey">
                                                Dummy content Cenas in erat accumsan, hendrerit lorem vel, pulvinar
                                                odio. Quisque
                                                eu conva. hendrerit lorem vel, pulvinar odio. Quisque eu conva.
                                            </p>
                                            <div className="row mb-3 mb-md-5 mb-xl-0">
                                                <div className="col-sm-6 col-12">
                                                    {countryList1.map((country, index) => <CountryListBadges key={index}
                                                                                                             country={country}/>)}
                                                </div>
                                                <div className="col-sm-6 col-12">
                                                    {countryList3.map((country, index) => <CountryListBadges key={index}
                                                                                                             country={country}/>)}                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </TabPane>

                                <TabPane tabId="2">
                                    <div className="row">
                                        <div className="col-xl-3 col-12">
                                            <ResponsiveContainer height={130}>
                                                <PieChart>
                                                    <Pie dataKey="amt"
                                                         data={pieChartData} cx="50%" cy="50%"
                                                         innerRadius={40}
                                                         outerRadius={60}
                                                         fill="#3367d6"
                                                         paddingAngle={5}>
                                                        {
                                                            pieChartData.map((entry, index) => <Cell key={index}
                                                                                                     fill={COLORS[index % COLORS.length]}/>)
                                                        }
                                                    </Pie>
                                                    <Tooltip/>
                                                </PieChart>
                                            </ResponsiveContainer>

                                        </div>

                                        <div className="col-xl-9 col-12">
                                            <p className="text-grey">
                                                Dummy content Cenas in erat accumsan, hendrerit lorem vel, pulvinar
                                                odio. Quisque
                                                eu conva. hendrerit lorem vel, pulvinar odio. Quisque eu conva.
                                            </p>
                                            <div className="row mb-3 mb-md-5 mb-xl-0">
                                                <div className="col-sm-6 col-12">
                                                    {countryList3.map((country, index) => <CountryListBadges key={index}
                                                                                                             country={country}/>)}
                                                </div>
                                                <div className="col-sm-6 col-12">
                                                    {countryList1.map((country, index) => <CountryListBadges key={index}
                                                                                                             country={country}/>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Default;