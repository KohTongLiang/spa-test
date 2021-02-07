import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import material ui components
import {
    Button, Typography, Grid, Container, Fab, IconButton, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper
} from '@material-ui/core';
import { Edit as EditIcon, Create as CreateIcon, Delete as DeleteIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

// import constants
import { USER_PAGE_TITLE, USER_PAGE_DESCRIPTION } from '../../Constants/values';
import { STYLE } from '../../Constants/styles';

import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';

const useStyles = makeStyles((theme) => (STYLE));

function User(props) {
    const classes = useStyles();
    const [dataRow, setDataRow] = useState([]);
    const [createUserShow, setCreateUserShow] = useState(false);
    const [updateUserShow, setUpdateUserShow] = useState(false);
    const [editData, setEditData] = useState({});

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = () => {
        axios.get(process.env.REACT_APP_API_URL + '/test/').then(
            (response) => {
                setDataRow(response.data);
            });
    }

    const createUserHandler = data => {
        axios.post(process.env.REACT_APP_API_URL + '/test', data).then((response) => {
            getUserData();
            alert('User Created');
        });
    }

    const updateUserHandler = data => {
        axios.put(process.env.REACT_APP_API_URL + '/test/' + editData._id, data).then((response) => {
            getUserData();
            alert('User Updated');
        });
    }

    const deleteUser = (data) => {
        axios.delete(process.env.REACT_APP_API_URL + '/test/' + data).then((response) => {
            getUserData();
            alert('User Deleted');
        });
    }

    const promptEditUser = dataRow => {
        setEditData(dataRow);
        setUpdateUserShow(!updateUserShow);
    }

    return (
        <Container maxWidth="lg">
            <main>
                <Typography variant='h3'>
                    { USER_PAGE_TITLE }
                </Typography>
                <Container>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="right">First Name</TableCell>
                                    <TableCell align="right">Last Name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Date of Birth</TableCell>
                                    <TableCell align="right">#</TableCell>
                                    <TableCell align="right">#</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dataRow.map((dataRow) => (
                                    <TableRow key={dataRow._id}>
                                        <TableCell component="th" scope="row">
                                            {dataRow.id}
                                        </TableCell>
                                        <TableCell align="right">{dataRow.firstName}</TableCell>
                                        <TableCell align="right">{dataRow.lastName}</TableCell>
                                        <TableCell align="right">{dataRow.email}</TableCell>
                                        <TableCell align="right">{dataRow.dob}</TableCell>
                                        <TableCell align="right"><IconButton color='primary' onClick={() => promptEditUser(dataRow)}><EditIcon /></IconButton></TableCell>
                                        <TableCell align="right"><IconButton color='secondary' onClick={() => deleteUser(dataRow._id)}><DeleteIcon /></IconButton></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
                <Grid container spacing={0} direction="row" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
                    <Grid item xs={12} md={10}>
                    </Grid>
                    <Grid item xs={12} md={10}>
                    </Grid>
                </Grid>
            </main>


            <Fab color="primary" onClick={() => setCreateUserShow(!createUserShow)} className={classes.fab} aria-label="add">
                <CreateIcon />
            </Fab>
            <CreateUser show={createUserShow} close={() => setCreateUserShow(!createUserShow)} createUser={createUserHandler} />
            <UpdateUser show={updateUserShow} close={() => setUpdateUserShow(!updateUserShow)} editUser={updateUserHandler} data={editData} />
        </Container>
    )
}

export default User;