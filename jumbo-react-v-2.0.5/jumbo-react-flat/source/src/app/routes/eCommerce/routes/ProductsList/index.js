import React from 'react';
import {ListGroup} from 'reactstrap';
import productData from "app/routes/eCommerce/routes/productData";
import ProductListItem from "components/eCommerce/ProductListItem";

function ProductsList() {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ListGroup>
                {productData.map((product, index) => (
                    <ProductListItem key={index} product={product}/>
                ))}
            </ListGroup>
        </div>
    );
}

export default ProductsList;