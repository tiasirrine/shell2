import React from 'react';
import {Button} from 'reactstrap';

const SocialMediaButtons = () => {
    return (
        <div>
            <div className="jr-btn-group">
                <Button color="default" className="jr-fab-btn jr-btn-hover bg-light-blue accent-2 text-white">
                    <i className="zmdi zmdi-twitter zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-fab-btn jr-btn-hover bg-indigo lighten-1 text-white">
                    <i className="zmdi zmdi-facebook zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-fab-btn jr-btn-hover bg-red lighten-1 text-white">
                    <i className="zmdi zmdi-google zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-fab-btn jr-btn-hover bg-red darken-2 text-white">
                    <i className="zmdi zmdi-pinterest zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-fab-btn jr-btn-hover bg-brown lighten-1 text-white">
                    <i className="zmdi zmdi-instagram zmdi-hc-lg"/>
                </Button>

                <Button color="default" className="jr-fab-btn btn-amber">
                    <i className="zmdi zmdi-rss zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-fab-btn btn-blue-grey">
                    <i className="zmdi zmdi-tumblr zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-fab-btn jr-btn-hover bg-light-blue darken-3 text-white">
                    <i className="zmdi zmdi-linkedin zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-fab-btn jr-btn-hover bg-pink lighten-2 text-white">
                    <i className="zmdi zmdi-dribbble zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-fab-btn bg-red accent-4 text-white">
                    <i className="zmdi zmdi-youtube zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-fab-btn jr-btn-hover bg-grey darken-3 text-white">
                    <i className="zmdi zmdi-github zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-fab-btn jr-btn-hover bg-light-blue lighten-2 text-white">
                    <i className="zmdi zmdi-skype zmdi-hc-lg"/>
                </Button>
            </div>

            <div className="jr-btn-group">
                <Button color="default" className="jr-btn jr-btn-hover bg-light-blue accent-2 text-white">
                    <i className="zmdi zmdi-twitter zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-hover bg-indigo lighten-1 text-white">
                    <i className="zmdi zmdi-facebook zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-hover bg-red lighten-1 text-white">
                    <i className="zmdi zmdi-google zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-hover bg-red darken-2 text-white">
                    <i className="zmdi zmdi-pinterest zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-hover bg-brown lighten-1 text-white">
                    <i className="zmdi zmdi-instagram zmdi-hc-lg"/>
                </Button>

                <Button color="default" className="jr-btn btn-amber">
                    <i className="zmdi zmdi-rss zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-btn btn-blue-grey">
                    <i className="zmdi zmdi-tumblr zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-hover bg-light-blue darken-3 text-white">
                    <i className="zmdi zmdi-linkedin zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-hover bg-pink lighten-2 text-white">
                    <i className="zmdi zmdi-dribbble zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-hover bg-red accent-4 text-white">
                    <i className="zmdi zmdi-youtube zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-hover bg-grey darken-3 text-white">
                    <i className="zmdi zmdi-github zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-hover bg-light-blue lighten-2 text-white">
                    <i className="zmdi zmdi-skype zmdi-hc-lg"/>
                </Button>
            </div>

            <div className="jr-btn-group">
                <Button color="default" className="jr-btn jr-btn-lg btn-primary">
                    <i className="zmdi zmdi-facebook zmdi-hc-fw"/>
                    <span>Signin with Facebook</span>
                </Button>
                <Button color="default" className="jr-btn jr-btn-hover jr-btn-lg bg-red lighten-1 text-white">
                    <i className="zmdi zmdi-google zmdi-hc-fw "/>
                    <span>Signin With Google+</span>
                </Button>
            </div>
        </div>
    );
};

export default SocialMediaButtons;