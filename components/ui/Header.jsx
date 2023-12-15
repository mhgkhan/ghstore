"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";


import Navbar from './Navbar';

const Header = () => {

    const [open,setOpen] = useState(false)
    const click = ()=>{
        setOpen(!open)
    }


    return (
        <header>
            <div className="container">
                <div className="logo_w_btn">
                    <div className="logo"><Image src={'/logo.png'} width={60} height={60} alt='Gh Store Logo' /></div>
                    <div className="sidebarButton" onClick={click}>{open?<IoClose />:<RxHamburgerMenu />}</div>
                </div>
                <Navbar click={click} open={open} />
            </div>
        </header>
    )
}

export default Header
