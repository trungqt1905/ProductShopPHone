import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import AddHomeIcon from '@mui/icons-material/AddHome';
import { useEffect, useState } from "react";
import { listloai } from "../../api/data";
import ListItem from "./ListItem";
import { NavLink } from "react-router-dom";

const featchApi = () => Promise.resolve(listloai);

function Header() {
    const [list, setList] = useState([]);

    useEffect(() => {
        featchApi().then((res) => {
            setList(res);
        });
    }, []);


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <AddHomeIcon style={{ marginRight: '20px' }} />
                        <NavLink to='/' style={{ textDecoration: 'none', color: '#fff', fontSize: 18 }}>
                            Home
                        </NavLink>
                        <ListItem list={list} />
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Header;