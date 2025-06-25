import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';



const Tag = () => {
    const [gif,setgif]=useState('');
    const[loading,isloading]=useState();
    const[tag,settag]=useState('CAR');
    console.log(loading);
    async function fetchdata() {
          isloading(true);
          const url =  `https://api.giphy.com/v1/gifs/random?api_key=wPyj2VBwu5xVuX7tmVrMlhyQZANbbECf&tag=${tag}`;
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
function changehandel(event){
  settag(event.target.value);
}
  return (
    <div className='flex flex-col items-center gap-y-5 '>
      <div className='font-bold text-[20px] mt-2 underline text-black uppercase'>Here's your {tag} GIF!</div>
   
{
  loading ? (<Spinner/>):(  <img src={gif} className='w-[500px] h-[300px] object-cover'/>)
}
     <input onChange={changehandel} value={tag} className='bg-white w-[400px] h-[33px] rounded-[8px] font-bold opacity-80 absolute mt-[373px] text-[15px] text-center border-red-600 border-[2px]'/>
      <button type="submit" onClick={clickhandle} className='bg-white w-[400px] h-[33px] rounded-[8px] font-bold opacity-80 absolute mt-[415px] text-[20px] hover:text-red-600  border-red-600 border-[2px]'>GENRATE</button>
    </div>
  )
}

export default Tag;

