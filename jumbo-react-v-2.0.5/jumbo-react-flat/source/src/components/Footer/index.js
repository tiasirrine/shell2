import React from 'react';
import {Button} from 'reactstrap';
import IntlMessages from 'util/IntlMessages';

const Footer = () => {
        return (
            <footer className="app-footer">
                <div className="d-flex flex-row justify-content-between">
                    <div>
                        <span> Copyright Company Name &copy; 2018</span>

                    </div>
                    <div>
                        <Button
                            color="link"
                            href="https://codecanyon.net/cart/configure_before_adding/20978545?license=regular&ref=phpbits&size=source&support=bundle_12month&_ga=2.172338659.1340179557.1515677375-467259501.1481606413"
                            target="_blank"
                            size="sm"
                            className="text-uppercase">
                            <IntlMessages id="eCommerce.buyNow"/></Button>
                    </div>
                </div>
            </footer>
        );
    }
;

export default Footer;
