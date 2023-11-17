import Link from 'next/link'
import React from 'react'

function Card({result}) {
    let imgUrl = result?.primaryImage?.url
    return (
      <>{
        imgUrl && <Link href={`/movie/?url=${imgUrl}`}>
        <div className=' py-5 cursor-pointer hover:shadow-md border border-slate-500 dark:border-white flex flex-col items-center rounded dark:shadow-white'>
            <img className=' aspect-square h-52 border-none outline-none' src={imgUrl} alt='movie poster'></img>
            <h1>{result.titleText.text}</h1>
            <h1>{result.releaseYear.year}</h1>
        </div></Link>}</>
    )
}

export default Card
