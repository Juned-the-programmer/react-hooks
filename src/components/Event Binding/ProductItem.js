import React, { useState } from 'react';

let ProductItem = () => {

    let [product , setproduct ] = useState({
        id : 'AA101AC',
        image : 'https://images-na.ssl-images-amazon.com/images/I/61v3DQL0seL._SX342_.jpg',
        name : 'Philips Light',
        qty : 2,
        price : 550
    })

    let increase = () => {
        setproduct({
            ...product,
            qty : product.qty + 1
        })
    }

    let decrease = () => {
        setproduct({
            ...product,
            qty: (product.qty - 1 > 0) ? product.qty - 1 : 1
        })
    }
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <table className="table table-hover text-center table-striped table-light">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>Sno</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {product.id}
                                    </td>
                                    <td>
                                        <img src={product.image} alt="" height="20" weight="20"/>
                                    </td>
                                    <td>
                                        {product.name}
                                    </td>
                                    <td>
                                        {product.price}
                                    </td>
                                    <td>
                                        <button className="btn btn-primary btn-sm" onClick={increase}>+</button>
                                        {product.qty}
                                        <button className="btn btn-primary btn-sm" onClick={decrease}>-</button>
                                    </td>
                                    <td>
                                        {product.price * product.qty}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductItem;