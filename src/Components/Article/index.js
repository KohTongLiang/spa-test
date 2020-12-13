import React from 'react';

// import material ui components
import { Box, Typography, Grid } from '@material-ui/core';
// import { AccountCircle, Menu as MenuIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import Blog from './Blog';

// import constants
import { LANDING_PAGE_DESCRIPTION, LANDING_PAGE_TITLE } from '../../Constants/values';
import { STYLE } from '../../Constants/styles';

const useStyles = makeStyles((theme) => (STYLE));

function Article (props) {
    const classes = useStyles();
    return (
        <Blog />
    )
}

export default Article;