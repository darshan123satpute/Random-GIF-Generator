  import React from 'react';
  import Random from "./Random";
  import Tag from './Tag';

  const App = () => {
    return (
      <div className="bg-slate-900 min-h-screen flex flex-col items-center justify-start gap-10 py-10">
        
        <b className="text-red-600 border-2 border-red-600 bg-white p-4 w-[90%] md:w-[500px] text-center tracking-[8px] md:tracking-[15px] rounded-2xl text-[18px] md:text-[20px]">
          RANDOM GIF
        </b>

       
        <div className="bg-red-200 w-[90%] md:w-[660px] min-h-[458px] rounded-2xl border-red-500 border-t-4 p-6 flex flex-col justify-between items-center">
          <Random />
        </div>

        
        <div className="bg-orange-100 w-[90%] md:w-[660px] min-h-[490px] rounded-2xl border-yellow-400 border-t-4 p-6 flex flex-col justify-between items-center">
          <Tag />
        </div>
      </div>
    )
  }

  export default App;
