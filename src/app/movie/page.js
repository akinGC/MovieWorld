
'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react'


function page() {
    const genereParams = useSearchParams()
    const genereVal = genereParams.get('url')
   
  return (
    <div className='flex justify-center items-center text-2xl'>

      <img className=' mt-10' src={genereVal}/>
    </div>
  );
}
export default page
