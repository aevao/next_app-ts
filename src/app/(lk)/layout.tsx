import type  { PropsWithChildren } from 'react'


export default function DashboardLayot ({children} : PropsWithChildren<unknown> ){

    return  <div>
        <h1>
        Dashboard Layout
    </h1>
        {children }</div>
   
    
}