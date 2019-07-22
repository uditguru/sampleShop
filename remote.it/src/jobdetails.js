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
   color : 'green'
 },
 des : {
   marginTop : 15
 },
 chip: {
  marginTop: theme.spacing(1),
  marginRight: theme.spacing(1),
},
h6 : {
  font : 'italic'
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
        <Typography variant="caption" color="secondary" >{info.location}</Typography>
        <div className={classes.info}>
        <Typography className={classes.info} variant="caption"  gutterBottom={true}>
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
       
        <Breakpoint medium down>
            <Button variant="contained"  style={{color : 'white', background : '#3490DC',marginTop: '5%', marginBottom: '5%', float: 'right', width : '100%' }} >Apply Now</Button>
        </Breakpoint>
        <Breakpoint medium up>
            <Button variant="contained"  style={{ color : 'white', background : '#3490DC', right : '5%' , width : '30%', top : '15%', position : 'absolute' }} >Apply Now</Button>
        </Breakpoint>
      </Container>
      
      <Container className={classes.des}>
        <Typography variant="h6" component="h6">Job Description</Typography>
        <Divider/>
        <Typography>
          {info.description}
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
        A datagrid enables you to display and edit data. ... Maybe you used libraries like react-bootstrap-table, react-grid, or react-table. .... Copy your account and application ID from the dashboard and replace them with the string 
        </Typography>
        <br/>
        <Typography variant="h6" component="h6">Requirements</Typography>
        <Divider/>
        <Typography>
          {info.description}
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
        A datagrid enables you to display and edit data. ... Maybe you used libraries like react-bootstrap-table, react-grid, or react-table. .... Copy your account and application ID from the dashboard and replace them with the string 
        </Typography>
        <br/>
        <Typography gutterBottom={true} variant="h6" component="h6">Skills </Typography>
        <Divider/>
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
