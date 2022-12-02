import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

const navItems = {home: '/', numiscorner: '/numiscorner'};

const Nav = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Listingas
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {Object.keys(navItems).map((key) => (
                            <Link key={key} href={navItems[key]}>
                                <Button sx={{ color: '#fff' }}>
                                    {key}
                                </Button>
                            </Link>
                        ))}
                        <Link href={navItems.home}>
                            <Button onClick={() => document.cookie = 'token=""'} key={'logout'} sx={{ color: '#fff' }}>
                                Log Out
                            </Button>
                        </Link>    
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Nav