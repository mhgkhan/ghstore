import Link from 'next/link'
import React from 'react'

const Navbar = ({open,show}) => {
    return (
        <nav style={{height:show? open?"auto":"0px":"initial"}}>
            <ul>
                <li><Link href="/jobs">JOBS</Link></li>
                <li><Link href="/advertaisment">ADVERTAISMENT</Link></li>
                <li><Link href="/info">INFO</Link></li>
                <li><Link href="/forms">FORMS</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
