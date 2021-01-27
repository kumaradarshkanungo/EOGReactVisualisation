import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const Box = (props:any) => {
  
    return (
      <Grid container direction="row" spacing={2}>
        <Grid item xs={4}>
          <Card>
            <CardHeader/>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemText
                    primary=""
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
};
  
export default Box;
  