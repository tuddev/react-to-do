import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export function Form() {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      firebase.addNote(value.trim())
        .then(() => {
          alert.show(`Note "${value}" created`, 'success');
        })
        .catch(() => {
          alert.show('Oops... Try again', 'error');
        });

      setValue('');
    } else {
      alert.show('Note is empty', 'warning');
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <Box
        sx={{
          '& > :not(style)': { m: 1, width: 834 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={value}
          id="outlined-basic"
          label="Enter note"
          variant="outlined"
          onChange={handleChange}
        />
      </Box>
    </form>
  );
}
