import { Button } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function ListItem(props) {
    const { list } = props;
    return (
        <div>
            {list.map((item) => (
                <NavLink
                    style={{
                        textDecoration: 'none',
                        color: 'white',
                        fontSize: '17px',
                        fontWeight: 'inherit',
                        marginLeft: '16px',
                        marginRight: '20px'
                    }}
                    to={`/Product/${item.id_loai}`} key={item.id_loai} color="inherit">{item.ten_loai}
                </NavLink>
            ))}
        </div >
    );
}

export default ListItem;