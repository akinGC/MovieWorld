import React from 'react'
import HeaderStartItems from './Header/HeaderStartItems'
import { MdHome } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import ThemeIcon from './Header/ThemeIcon';

function Header() {
    return (
        <div className='hdCnt flex justify-between sm:mx-32 mx-5 py-5 items-center'>
            <div className='hdStart flex gap-5'>
                <HeaderStartItems title='HOME' address='/' icon={<MdHome />}/>
                <HeaderStartItems title='ABOUT' address='/about' icon={<MdInfo />}/>
            </div>
            <div className='hdEnd flex gap-5 items-center'>
                <ThemeIcon/>
                <div className='IMDBIcon bg-amber-500 p-1 rounded'>IMDB</div>
                <div className='cloneTxt hidden sm:inline'>CLONE</div>
            </div>
        </div>
    )
}

export default Header
