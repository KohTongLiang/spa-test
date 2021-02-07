import React, { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';


import {
    DialogContent, Typography, Dialog, AppBar, Toolbar, IconButton,
    FormGroup, FormControl, Container, TextField, FormHelperText
} from '@material-ui/core';
import {
    Close as CloseIcon, Save as SaveIcon
} from '@material-ui/icons';
import * as Transition from '../../Constants/transition';
import { makeStyles } from '@material-ui/core/styles';

// import constants
import { STYLE } from '../../Constants/styles';

const useStyles = makeStyles((theme) => (STYLE));


function CreateUser(props) {
    const classes = useStyles();
    const { handleSubmit, control, getValues, setValue, errors } = useForm();

    const onSubmit = data => {
        props.createUser(data);
        props.close();
    }
    const formValues = getValues();

    return (
        <Dialog
            fullScreen open={props.show}
            onClose={props.close}
            TransitionComponent={Transition.SlideUpDialog}
            scroll="body"
        >
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={props.close} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.dialogTitle}>
                        Add Notes
                    </Typography>
                    <IconButton onClick={handleSubmit((data) => onSubmit(data))}  color="inherit">
                        <SaveIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <DialogContent>
                <Container>
                    <form>
                        <FormGroup>
                            <FormControl>
                                <label>Id</label>
                                <Controller
                                    as={<TextField />}
                                    name="id"
                                    type="number"
                                    defaultValue=''
                                    value={formValues.id || ""}
                                    rules={{ required: true }}
                                    onChange={e => setValue('id', e.target.value)}
                                    control={control}
                                />
                                <FormHelperText>{errors.id && <span className={classes.errorText}>ID is required</span>}</FormHelperText>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl>
                                <label>Email</label>
                                <Controller
                                    as={<TextField />}
                                    name="email"
                                    type="text"
                                    defaultValue=''
                                    control={control}
                                    value={formValues.email || ""}
                                    rules={{
                                        required: true,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid email address"
                                        }
                                    }}

                                    onChange={e => setValue('email', e.target.value)}
                                />
                                <FormHelperText>{(errors.email) && <span className={classes.errorText}>Email is required and must be properly formatted.</span>}</FormHelperText>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl>
                                <label>First Name</label>
                                <Controller
                                    as={<TextField />}
                                    name="firstName"
                                    type="text"
                                    control={control}
                                    defaultValue=''
                                    value={formValues.firstName || ""}
                                    rules={{ required: true }}
                                    onChange={e => setValue('firstName', e.target.value)}
                                />
                                <FormHelperText>{errors.firstName && <span className={classes.errorText}>First Name is required</span>}</FormHelperText>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl>
                                <label>Last Name</label>
                                <Controller
                                    as={<TextField />}
                                    name="lastName"
                                    type="text"
                                    defaultValue=''
                                    control={control}
                                    value={formValues.lastName || ""}
                                    rules={{ required: true }}
                                    onChange={e => setValue('lastName', e.target.value)}
                                />
                                <FormHelperText>{errors.lastName && <span className={classes.errorText}>Last Name is required</span>}</FormHelperText>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <FormControl>
                                <label>Date of birth</label>
                                <Controller
                                    as={<TextField />}
                                    name="dob"
                                    type="date"
                                    control={control}
                                    defaultValue='2017-05-24'
                                    value={formValues.date}
                                    rules={{ required: true }}
                                    onChange={e => setValue('dob', e.target.value)}
                                />
                                <FormHelperText>{errors.dob && <span className={classes.errorText}>Date of birth is required</span>}</FormHelperText>
                            </FormControl>
                        </FormGroup>
                    </form>
                </Container>
            </DialogContent>
        </Dialog>
    )
}

export default CreateUser;