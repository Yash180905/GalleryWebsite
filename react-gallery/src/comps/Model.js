import React from 'react';
import { getImageUrl } from '../ApiCalls';

const Model = ({selectedImg,setSelectedImg}) => {
  return (
    <div className="model">
<img src ={getImageUrl(selectedImg)}/>    
    </div>
  );
}

export default Model;
