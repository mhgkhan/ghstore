import React from 'react'
import Link from 'next/link'


const JobItem = ({ serial,code,title, desc, slug,category }) => {
    console.log(category)
    return (
        <div className="job job-item">
            <p className='sno'>{serial}</p>
            <p className='desc'>{title}</p>
            <Link href={`/jobs/${title.split(" ").join("-")}`}><button className='default_button action' >Open</button></Link>
        </div>
    )
}

export default JobItem
