import Image from 'next/image';
import React from 'react'
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo"><Image src={'/logo.jpg'} width={40} height={50} alt='Gh Store Logo' /></div>
                <div className="sidebarButton"><TbLayoutSidebarLeftCollapseFilled /></div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header
