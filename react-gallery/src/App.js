
import React from 'react';
import ImageGrid from './comps/ImageGrid';
import UploadImage from './comps/UploadImage';
import  {useState} from 'react';
import Model from './comps/Model';
import './App.css';


const App = () => {
  const [selectedImg, setSelectedImg]= useState('');
  return (
    <div>
      <UploadImage />
      <ImageGrid setSelectedImg={setSelectedImg}  />
    {
      selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
    }
      {/* <Model/> */}
    </div>
  );
}

export default App;
