import React, {useState, useEffect} from 'react';
import Data from './data.json'

function JobDetails(props){
  const id = props.match.params;
  const [ info, setInfo] = useState({});  
useEffect(() => {
  setInfo(Data[id.jobid])
},[id.jobid]);

  return(
    <div>
     {info.location}
     {
       info.company && (<h2> {info.company.name} </h2>)
     }
    </div>
  );
}
export default JobDetails;
