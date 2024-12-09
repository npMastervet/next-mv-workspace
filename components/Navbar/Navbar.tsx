import React from 'react'
import Logo from './Logo'
import Search from './Search'
import { Darkmode } from './Darkmode'
import DropdownListMenu from './DropdownListMenu'

const Navbar = () => {
    return (
        <nav>
            <div className='container flex flex-col justify-between items-center py-8 sm:flex-row sm:items-conter gap-4'>
                <Logo />
                <Search />
                <div className='flex gap-4'>
                    <Darkmode />
                    <DropdownListMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar