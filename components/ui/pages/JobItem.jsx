import React from 'react'

const JobItem = ({ serial, desc, slug }) => {
    return (
        <div className="job job-item">
            <p className='sno'>{serial}</p>
            <p className='desc'>{desc}</p>
            <button className='default_button action' >Open</button>
        </div>
    )
}

export default JobItem
