import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://c.static-nike.com/a/images/f_auto/dpr_3.0/h_500,c_limit/g1ljiszo4qhthfpluzbt/123-joyride-cdp-apla-xa-xp.jpg'},
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://img.ltn.com.tw/Upload/3c/page/2021/07/19/210719-45230-1.jpg'},
]

const Products = () =>{
    return (
        <main>
            <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/> 
                </Grid>
            ))}
            </Grid>
        </main>
    );
    
}

export default Products;