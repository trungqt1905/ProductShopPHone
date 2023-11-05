import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import formatCurrency from '../../fotmat/FotmatCurrent';
import formatDate from '../../fotmat/FotmatDate';
function ProductItem(props) {
    const { item } = props;
    return (
        <Box>
            {item.map((item) => (
                <Grid key={item.id_sp} container spacing={4} sx={{ marginTop: 5 }}>
                    <Grid item lg={7} >
                        <Card sx={{ maxWidth: 700, minHeight: 420 }}>
                            <CardMedia
                                component="img"
                                height="440"
                                image={item.hinh}
                                alt="green iguana"
                            />
                        </Card>
                    </Grid>
                    <Grid item lg={5} >
                        <Card
                            sx={{
                                maxWidth: 800,
                                minHeight: 440,
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                            <CardContent style={{ marginBottom: 20 }}>
                                <Typography gutterBottom variant="h4" component="div"
                                    style={{ color: '#1976d2', textAlign: 'center', marginBottom: 20, textTransform: 'uppercase' }}>
                                    Chi tiết sản phẩm
                                </Typography>
                                <Typography color="text.secondary"
                                    style={{ fontSize: 22, fontWeight: 640, color: '#1976d2', marginBottom: 10, textTransform: 'uppercase' }}>
                                    {`${item.ten_sp}`}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Cpu : {`${item.CPU}`}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Ram : {`${item.Dia}`}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Màu sắc : {`${item.Mausac}`}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Số lượt xem : {`${item.soluotxem}`}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Ngày ra mắt : {formatDate()}
                                </Typography>
                                <Typography variant="body1" color="text.secondary" >
                                    Giá gốc : <del style={{ opacity: 0.7 }}>{formatCurrency(item.gia)}</del>
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Giá khuyến mãi : <span style={{ fontWeight: 600 }}>{formatCurrency(item.gia_km)}</span>
                                </Typography>
                            </CardContent>
                            <CardActions style={{ marginLeft: 20 }}>
                                <Button size="medium" variant='contained'>Mua</Button>
                                <Button size="medium" variant='contained'>Apply Voucher</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

            ))
            }
        </Box >
    );
}

export default ProductItem;

<Grid container marginTop={2} spacing={2} columns={12}>
    <Grid item lg={8}>
        <Card sx={{ maxWidth: '90%' }}>
            <CardMedia
                sx={{ height: 600 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
        </Card>
    </Grid>

</Grid>