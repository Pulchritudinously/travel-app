import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const gridStyles = makeStyles({
  container: {
    height: "150%",
    minHeight: 100,
    border: "1px solid black",
    textAlign: "center"
  },
  containerTall: { 
    minHeight: 250
  }
});

const trips = [
  'Paris',
  'Switzerland',
  'New York City'
];


function ManageFunds() {

  const useClass = gridStyles();

  return (
    <Grid container direction="row" spacing={2}>
    <Grid item xs>
      <div className={useClass.container}>1
      <List sx={{width: '100%', }}>
        {trips.map((value) => (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
          <ListItemText primary={`Trip to ${value}`} />
          </ListItem>
        ))}
      </List>
      </div>

    </Grid>
    <Grid item container direction="column" xs spacing={2}>
      <Grid item xs>
        <div className={useClass.container}>2</div>
      </Grid>
      <Grid item xs>
        <div className={clsx(useClass.container, useClass.containerTall)}>
          3
        </div>
      </Grid>
    </Grid>
    <Grid item xs>
      <div className={useClass.container}>4</div>
    </Grid>
  </Grid>
  );
}

export default ManageFunds;
