import React from 'react';
import CircularProgress from '@mui/material/CircularProgress'
import { UploadData } from '../ApiCalls';
import { useEffect } from 'react';


const ProgressBar = ({values,setValues}) => {

    useEffect(() => {
        UploadData(values.formData).then(response=>{
          if(response.error){
            setValues({...values,error:response.error,file:""})
          }else{
            setValues({...values,error:"",file:""})
          }
        });
    }, []); 
    


  return (
    <div>
      <CircularProgress />
    </div>
  );
}

export default ProgressBar;
