"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const Navbar = ({ open, show }) => {

    const patname = usePathname();
    const [path, setPath] = useState({ patname })

    useEffect(() => {
        setPath(patname)
    }, [patname])

    return (
        <nav style={{ height: show ? open ? "auto" : "0px" : "initial" }}>
            <ul>
                <li><Link style={{ color: path === "/" ? "#f9a435" : 'white' }} href="/">HOME</Link></li>
                <li><Link style={{ color: path === "/jobs" ? "#f9a435" : 'white' }} href="/jobs">JOBS</Link></li>
                <li><Link style={{ color: path === "/info" ? "#f9a435" : "white" }} href="/info">INFO</Link></li>
                <li><Link style={{ color: path === "/forms" ? "#f9a435" : "white" }} href="/forms">FORMS</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
