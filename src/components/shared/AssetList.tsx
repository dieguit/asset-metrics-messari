import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export default function AssetList() {
  return (
    <List>
      {['Item 1', 'Item 2', 'Item 3'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
}
