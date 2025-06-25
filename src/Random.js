import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

// const API_KEY=process.env.REACT_GIPY_API_KEY;
// console.log(API_KEY);

const Random = () => {
    const [gif,setgif]=useState('');
    const[loading,isloading]=useState();
    console.log(loading);
    async function fetchdata() {
          isloading(true);
          const url = "https://api.giphy.com/v1/gifs/random?api_key=wPyj2VBwu5xVuX7tmVrMlhyQZANbbECf";
          const {data} = await axios.get(url);
          const responce=data.data.images.downsized_large.url;
          console.log(responce);
          setgif(responce);
          isloading(false);
       
      }
useEffect(()=>{
    
    fetchdata();
     
},[]);

function clickhandle(){
  fetchdata();
}
  return (
    <div className='flex flex-col items-center gap-y-5 '>
      <div className='font-bold text-[20px] mt-2 underline text-black'>RANDOM GENRATE</div>
   
{
  loading ? (<Spinner/>):(  <img src={gif} className='w-[500px] h-[300px] object-cover'/>)
}
     
      <button type="submit" onClick={clickhandle} className='bg-white w-[400px] rounded-[8px] font-bold opacity-80 absolute mt-[373px] text-[20px] hover:text-red-600  border-red-600 border-[2px]'>GENRATE</button>
    </div>
  )
}

export default Random;

