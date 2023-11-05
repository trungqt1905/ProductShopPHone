import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import { listsp } from '../../api/data';
import { useParams } from 'react-router-dom';
import ProductLq from './ProductLq';
const fakeApi = () => Promise.resolve(listsp);
function ProductDetail(props) {
    const [item, setItem] = React.useState([]);
    const id = useParams();

    const product = listsp.filter((item) => item.id_sp === id.id);

    React.useEffect(() => {
        fakeApi().then(res => {
            const product = res.filter((item) => item.id_sp === id.id);
            setItem(product);
        });
    }, []);


    return (
        <Box>
            <ProductItem item={product} />
            <ProductLq item={item} />
        </Box>
    );
}

export default ProductDetail;