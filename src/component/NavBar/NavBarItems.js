'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

function NavBarItems({title,params}) {
    const getParams = useSearchParams()
    let genereValue=getParams.get('genere')
    return (
        <div className={`${genereValue && genereValue===params && `underline decoration-amber-500 decoration-2 underline-offset-8`}`}>
            <Link href={`/?genere=${params}`}>{title}</Link>
        </div>
    )
}

export default NavBarItems
