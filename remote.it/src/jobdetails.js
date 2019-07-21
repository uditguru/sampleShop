import React, {useState, useEffect} from 'react';



function JobDetails(props){
  const id = props.match.params;
  const [ info, setInfo] = useState({ title : ''});

useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id.jobid}`)
  .then( data => data.json())
  .then( res => {
    setInfo(res);
  })

},[id]);


  return(
    <h1> {info.title} </h1>
  );
}
export default JobDetails;
