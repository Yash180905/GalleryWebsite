import React from 'react';
import { getImageUrl, getImages } from '../ApiCalls'
import { useEffect, useState } from 'react';
// import { CircularProgress } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress'

const ImageGrid = () => {
  const [values, setValues] = useState({
    images: [],
    error: ""
  })
  useEffect(() => {

    getImages().then(async (response) => {
      response = await response.json();
      if (response.error) {
        console.log(response);
        setValues({ ...values, error: response.error })
      }
      else {
        setValues({ ...values, images: response, error: "" })
      }
    })
  }, []);

  return (
    <div className='images'>
      {values.error && <h1 className='error'> {values.error} </h1>}
      {values.images.length > 0 && values.images.map((data, index) => {

        return (<div key={data?._id}
          className="img-wrap"
        >
          <img src={getImageUrl(data?._id)}   />
        </div>)
      })}
      {values.images.length === 0 && <CircularProgress color="secondary" />}
    </div>


  );
}

export default ImageGrid;
