import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { NavLink } from 'react-router-dom';
import formatCurrency from '../../fotmat/FotmatCurrent';
function Item(props) {
    const { item } = props;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1} collums={12} >
                {item.map((item) => (
                    <Grid item xs={3} key={item.id_sp} >
                        <NavLink to={`/productDetail/${item.id_sp}`} style={{ textDecoration: 'none' }}>
                            <Card sx={{ maxWidth: 400, minHeight: 430, marginTop: 5 }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={item.hinh}
                                    alt="green iguana"
                                />
                                <CardContent style={{ minHeight: 180 }} >
                                    <Typography gutterBottom variant="h5" component="div" style={{ height: 100, textTransform: 'uppercase' }} >
                                        {item.ten_sp}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Giá gốc : <del style={{ opacity: 0.7 }}>{formatCurrency(item.gia)}</del>
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        Giá khuyến mãi : <span style={{ fontWeight: 600 }}>{formatCurrency(item.gia_km)}</span>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="medium" variant='contained'>Thêm vào giỏ hàng</Button>
                                </CardActions>
                            </Card>
                        </NavLink>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}

export default Item;
