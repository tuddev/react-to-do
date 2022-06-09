import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export function Notes({ notes, onRemove }) {
  const handleRemoveNote = (id) => () => onRemove(id);

  if (notes.length === 0) return <Typography>No notes</Typography>;
  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {
            notes.map((note) => (
              <ListItem
                key={note.id}
                disablePadding
                secondaryAction={(
                  <IconButton onClick={handleRemoveNote(note.id)} edge="end" aria-label="delete">
                    x
                  </IconButton>
                )}
              >
                <ListItemButton key={note.id}>
                  <ListItemText
                    secondary={new Date().toLocaleDateString()}
                    primary={note.title}
                  />
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </nav>
    </Box>
  );
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemove: PropTypes.func.isRequired,
};
