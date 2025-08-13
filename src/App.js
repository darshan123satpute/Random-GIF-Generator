import React from 'react';
import Random from "./Random";
import Tag from './Tag';
const App = () => {
  return (
  
    <div className='bg-slate-900 md:h-[1080px]'>
    
      <b className='absolute text-red-600 border border-red-600 border-[2px] bg-white mt-[40px] ml-[410px] p-4 w-[500px] text-center tracking-[15px] rounded-[20px] text-[20px]'>RANDOM GIF</b>
      <div className='bg-red-200 absolute mt-[150px] ml-[330px] w-[660px] h-[415px] rounded-2xl border-red-500 border-t-4'>
      <Random/>
      </div>
      <div className='bg-orange-100 absolute mt-[600px] ml-[330px] w-[660px] h-[458px] rounded-2xl border-yellow-400 border-t-4'>
      <Tag/>
      </div>
    </div>
  
  )
}

export default App
