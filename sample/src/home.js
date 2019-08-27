import React, {useState , useEffect} from 'react';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Data from './data.json';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
// component
import Posts from './postings';
import GridPosts from './gridposts';
import Options from './options';
import Upload from './upload';

const useStyles = makeStyles(theme => ({
  root: {
    width: '95%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    flex: 1,
    marginBottom: 10,
    marginTop : 10,
    margin : "2.5%",
    borderRadius : 15
  },
  input: {
    flex: 1,
    marginLeft: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    borderRadius : 15
  },
  typo: {
    color: 'white',
    alignContent : 'center',
    margin : '5vw',
    position : 'absolute',
    width : '50%',
    lineHeight : 1.5
  },
  lottie: {
    position : 'absolute',
  },
  card: {
    minWidth : '20em',
    height : "20%",
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20
  }
}));

const div = {
  backgroundColor: '#3490dc',
  height: '25%',
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


function Home() {

  const classes = useStyles();
  const [data, setData] = useState({ products: [], isLoading: true });
  const [id, setId] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [search ,setSearch] = useState(null)

  const theme = useTheme();
 
  const url = "https://still-taiga-32576.herokuapp.com/api/search"


  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

  function handleClickOpen(id) {
    setOpen(true);
    setId(id)
  }

  function searchQuery(event){
    var query = {
      search : event.target.value
    }
    console.log(event.target.value);
    fetch(url, 
      {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(query)
    }).then( res => res.json()).then(res => {
      console.log(res);
      setData({product : res})
    })
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }
  useEffect(() => {
    window.scrollTo(0, 0);

    //fetch('https://jsonplaceholder.typicode.com/posts')
    //.then(res => res.json())
    //.then(data => {
    //setData({ posts: data, isLoading: false })
    //})
    setData({ posts: Data, isLoading: false });
  }, []);

  return (<div>
<Paper className={classes.root}>

<InputBase
  className={classes.input}
  placeholder="Search..."
  inputProps={{ 'aria-label': 'Search...' }}
  onChange={(e) => searchQuery(e)}
/>
<IconButton className={classes.iconButton} aria-label="Search">
  <SearchIcon />
</IconButton>

</Paper>
      <Divider />
      <Options />
      <Divider />
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Posts
         searchResult={data}
        />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <GridPosts 
        searchResult={data}
        />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Upload />
        </TabPanel>
      </SwipeableViews>
      
    </div>
  );
}

export default Home;
