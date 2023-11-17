import React from 'react'
import NavBarItems from './NavBar/NavBarItems'

function NavBar() {
    return (
        <div className=' bg-slate-400 flex gap-10 justify-center py-2'>
            <NavBarItems title='Trending' params='trending'/>
            <NavBarItems title='Top Rated' params='topRated'/>
        </div>
    )
}

export default NavBar
