import React, {FunctionComponent} from 'react';
import './headerNav.css'
import {NavLink , useLocation} from 'react-router-dom'

type HeaderProps = {
    choiced:string
    mainNavItems:string[]
    subNavItems:string[]
}
const Header:FunctionComponent<HeaderProps> = (props)=>{
    const location = useLocation()

    // IIFE below
    const isStatusChanged = (()=>{
        let classNameReturned = String()
        const isCurrentChoiced = location.pathname.includes(props.choiced.toLowerCase())
        if (isCurrentChoiced){
            classNameReturned = 'subNavigation active'
            return classNameReturned
        }
        if (!isCurrentChoiced){
            classNameReturned = 'subNavigation deactive'
            return classNameReturned
        } 
    }
    )()
    const mainNavigation = props.mainNavItems.map((current)=>(
        <li key={`navItem ${current}`} id={current.toLowerCase()} >
            <NavLink 
                to={`/${current.toLowerCase()}`} 
                >
                    {current.toUpperCase()}
                </NavLink>
        </li>
    ))
    const subNavigation = props.subNavItems.map((current)=>(
        <li key={`navSubItem ${current}`} >
             <NavLink to={`/${props.choiced.toLowerCase()}/${current.toLowerCase()}`}>{current.toUpperCase()}</NavLink>
        </li>
    ))
    return (
        <>           
            <header className='headerBox'>
                <nav>
                    <ul className='mainNavigation'>
                        {mainNavigation}
                    </ul>
                    <ul className={isStatusChanged}>
                        {subNavigation}
                    </ul>
                </nav>
            </header>
        </>
    )

}


export default Header