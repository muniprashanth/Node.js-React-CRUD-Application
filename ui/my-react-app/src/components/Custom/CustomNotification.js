import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const SnackNotification = ({ message }) => {
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    useEffect(() => {
        if (message) {
            setOpen(true);
        }
    }, [message]);

    return (
        <div>
            {message && (
                <Snackbar
                    style={{ color: 'red' }}
                    open={open}
                    autoHideDuration={1200}
                    onClose={handleClose}
                    message={message}
                    action={action}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    TransitionComponent={Slide}
                    TransitionProps={{
                        direction: 'left',
                    }}
                />
            )}
        </div>
    );
};

export default SnackNotification;
