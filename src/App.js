import React from 'react';
import Random from "./Random";
import Tag from './Tag';
const App = () => {
  return (
  
    <div className='bg-indigo-400 h-[1080px] w-full background'>
    
      <b className='absolute text-red-600 border border-red-600 border-[2px] bg-white mt-[40px] ml-[260px] p-4 w-[800px] text-center rounded-[20px] text-[20px]'>RANDOM GIF</b>
      <div className='bg-orange-400 absolute mt-[150px] ml-[330px] w-[660px] h-[415px] rounded-[30px]'>
      <Random/>
      </div>
      <div className='bg-green-500 absolute mt-[600px] ml-[330px] w-[660px] h-[458px] rounded-[30px]'>
      <Tag/>
      </div>
    </div>
  
  )
}

export default App
