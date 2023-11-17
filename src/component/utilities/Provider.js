'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

function Provider({children}) {
    return (
        <div className=' bg-white min-h-screen dark:bg-slate-600'>
             <ThemeProvider enableSystem={true} attribute="class">
            {children}
        </ThemeProvider>
        </div>
    )
}

export default Provider
