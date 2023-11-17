import Link from 'next/link'
import React from 'react'

function HeaderStartItems({title,address,icon}) {
    return (
       <div>
       <Link href={address} className=' hidden sm:inline  hover:text-amber-500'>{title}</Link>
       <Link href={address} className=' text-2xl sm:hidden active:text-amber-500'>{icon}</Link>


       </div>
    )
}

export default HeaderStartItems
