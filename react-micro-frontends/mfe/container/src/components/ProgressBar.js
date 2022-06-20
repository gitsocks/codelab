import { createStyles, LinearProgress, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => createStyles({
    bar: {
        width: '100%',
        '& > * + *': {
            margin: theme.spacing(2)
        }
    }
}))

export default () => {
    const classes = useStyles();

    return <div className={classes.bar}>
        <LinearProgress />
    </div>
}