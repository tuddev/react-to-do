import React, { useContext, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { Fade } from '@mui/material';
import { AlertContext } from '../context/alert/alertContext';

export function AlertPopup() {
  const { alert, hide } = useContext(AlertContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      hide(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [alert.visible]);

  if (!alert.visible) {
    return null;
  }

  return (
    <Fade
      in={alert.visible}
      exit={hide}
      style={{ transformOrigin: '0 0 0' }}
      {...(alert.visible ? { timeout: 600 } : {})}
    >
      <Collapse in={alert.visible}>
        <Alert
          severity={alert.type}
          action={(
            <IconButton
              onClick={hide}
            >
              x
            </IconButton>
          )}
        >
          {alert.text}
        </Alert>
      </Collapse>
    </Fade>
  );
}
