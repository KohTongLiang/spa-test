import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import material ui components
import {
    AppBar, Toolbar, Typography, IconButton, Button, MenuItem, Menu, Hidden, List, ListItem, ListItemText, Divider,
    Drawer, ListItemIcon
} from '@material-ui/core';
import { AccountCircle, Menu as MenuIcon, Home as HomeIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

// import constants
import { APP_NAME } from '../../Constants/values';
import { STYLE } from '../../Constants/styles';
import {  USER } from '../../Constants/routes';

const useStyles = makeStyles((theme) => (STYLE));

function NavigationBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    {/* Switch to drawer when screen size is small */}
                    <Hidden smUp>
                        <IconButton onClick={toggleDrawer('left', true)} edge="start" edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="body1" className={classes.appbarTitle}>
                            <Link to='/' className={classes.customLinkStyling}>
                                {APP_NAME}
                            </Link>
                        </Typography>
                        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', true)}>
                            <div
                                className={classes.list}
                                role="presentation"
                                onClick={toggleDrawer('left', false)}
                                onKeyDown={toggleDrawer('left', false)}
                            >
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Link to='/' className={classes.customLinkStyling}>Home</Link>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Link to={USER} className={classes.customLinkStyling}>User</Link>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </div>
                        </Drawer>
                    </Hidden>
                    {/* Use long navbar when screen size is larger */}
                    <Hidden xsDown>
                        <Typography variant="h6" style={{ flexGrow: 0.05 }}>
                            <Link to='/' className={classes.customLinkStyling}>
                                {APP_NAME}
                            </Link>
                        </Typography>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            <Link to={USER} className={classes.customLinkStyling}>
                                User
                            </Link>
                        </Typography>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavigationBar;