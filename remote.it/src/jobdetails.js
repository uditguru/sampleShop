import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Breakpoint, { BreakpointProvider } from 'react-socks';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

import Data from './data.json'

const useStyles = makeStyles(theme => ({
 info :{
   marginRight : 5,
 },
 des : {
   marginTop : 15
 },
 chip: {
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
}
}));

function JobDetails(props) {
  const classes = useStyles();
  const id = props.match.params;
  const [info, setInfo] = useState({});
  useEffect(() => {
    setInfo(Data[id.jobid])
  }, [id.jobid]);

  return (
    <div>
      <Container style={{marginTop : 20}}>
        <Typography variant="h6" gutterBottom={true} >
          {info.title}
        </Typography>
        <div className={classes.info}>
        <Typography className={classes.info} variant="caption" color="secondary" gutterBottom={true}>
          {
            info.company && (<span style={{ paddingBottom : 50}}> {info.company.name} </span>)
          }
        </Typography>
        <Typography className={classes.info} variant="caption" color="secondary" gutterBottom={true}>
          {
            info.company && (<a style={{ paddingBottom : 50, textDecoration: 'none' }} target="_blank" href={info.company.website}> Visit Company Site </a>)
          }
        </Typography>
        </div>
        <Divider/>
        <div style={{width : '100%' , height: '3vh'}}>
        <Breakpoint medium down>
            <Button variant="contained" color="primary" style={{marginTop: '5%', marginBottom: '5%', float: 'right', width : '100%' }} >Apply Now</Button>
        </Breakpoint>
        <Breakpoint medium up>
            <Button variant="contained" color="primary" style={{ float: 'right', width : '20%' }} >Apply Now</Button>
        </Breakpoint>
        </div>
      </Container>
      
      <Container className={classes.des}>
      <Divider/>
        <Typography variant="h6" component="h6">Job Description</Typography>
        <Typography>
          {info.description}
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
        A datagrid enables you to display and edit data. ... Maybe you used libraries like react-bootstrap-table, react-grid, or react-table. .... Copy your account and application ID from the dashboard and replace them with the string 
        </Typography>
        <br/>
        <Typography variant="h6" component="h6">Skills </Typography>

        {
          info.skills && info.skills.map((skill, index) => (
            <Chip key={index} className={classes.chip} clickable={true} label={skill} />
          ))
        }
      </Container>
    </div>
  );
}
export default JobDetails;
