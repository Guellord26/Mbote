import React, {createContext, useContext} from 'react'
import {MyContext} from './NavBar'


const ContextTest = () =>{
    const user = useContext(MyContext)
    
    return(
        <h1 className='font-Jodefin'>{user}</h1>
    )
} 
export default ContextTest


