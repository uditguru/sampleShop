import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breakpoint, { BreakpointProvider } from 'react-socks';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { Card } from '@material-ui/core';


const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    padding: 5
  },
  containerBig: {
    marginTop : 10,
    padding: 5,
    position: 'absolute',
    width: '20vw'
  },
  headingBig : {
    margin : 20
  }
});

function Options() {
  const classes = useStyles();
  return (
    <div>
      <Breakpoint medium down>
        <Container className={classes.container}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Filters</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List>
                <ListItem>
                  <Checkbox
                    value="checkedA"
                    inputProps={{
                      'aria-label': 'primary checkbox',
                    }}
                  />
                  <label> Contract </label>

                </ListItem>
                <ListItem>
                  <Checkbox
                    value="checkedA"
                    inputProps={{
                      'aria-label': 'primary checkbox',
                    }}
                  />
                  <label> Full-Time </label>

                </ListItem>
                <ListItem>
                  <Checkbox
                    value="checkedA"
                    inputProps={{
                      'aria-label': 'primary checkbox',
                    }}
                  />
                  <label> Visa Sponsor </label>

                </ListItem>
                <ListItem>
                  <Checkbox
                    value="checkedA"
                    inputProps={{
                      'aria-label': 'primary checkbox',
                    }}
                  />
                  <label> Remote </label>
                </ListItem>
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Container>
      </Breakpoint>
      <Breakpoint large up>
        <Container className={classes.containerBig}>
          <Card>
            <Typography variant="button" component="h6" className={classes.headingBig}>Filters</Typography>
            <List>
              <ListItem>
                <Checkbox
                  value="checkedA"
                  inputProps={{
                    'aria-label': 'primary checkbox',
                  }}
                />
                <label> Contract </label>

              </ListItem>
              <ListItem>
                <Checkbox
                  value="checkedA"
                  inputProps={{
                    'aria-label': 'primary checkbox',
                  }}
                />
                <label> Full-Time </label>

              </ListItem>
              <ListItem>
                <Checkbox
                  value="checkedA"
                  inputProps={{
                    'aria-label': 'primary checkbox',
                  }}
                />
                <label> Visa Sponsor </label>

              </ListItem>
              <ListItem>
                <Checkbox
                  value="checkedA"
                  inputProps={{
                    'aria-label': 'primary checkbox',
                  }}
                />
                <label> Remote </label>
              </ListItem>
            </List>
          </Card>
        </Container>
      </Breakpoint>
    </div>
  );
}
export default Options;
