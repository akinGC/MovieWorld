'use client'
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function ThemeIcon() {
    const {theme,setTheme}  = useTheme()
    const [loaded,setLoaded] = useState(false)

    useEffect(()=>{
        setLoaded(true)
    },[])

    return (
        <div>
        {   loaded &&
            theme === "light" ?
            <button className=' active:text-amber-500 text-2xl' onClick={()=>{setTheme('dark')}}><MdDarkMode /></button>
          : <button className=' active:text-amber-500 text-2xl' onClick={()=>{setTheme('light')}}><MdLightMode /></button>

        }
        </div>
    )
}

export default ThemeIcon
