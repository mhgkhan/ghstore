import React from 'react'
import JobItem from './JobItem'
import JobJson from '@/other/Jobs.json'


const AllJobsBlock = () => {


    

    return (
        <div className="all-jobs-block">
            <h3>Latest jobs </h3>
            <div className="job" id='jobsheader'>

                <p className='sno'>S.NO</p>
                <p className='desc'>Description</p>
                <p className='action'>Action</p>

            </div>


           {JobJson.map((job,index)=>{
            return <JobItem serial={index+1} key={index} desc={job.desc} />
           })}



        </div>
    )
}

export default AllJobsBlock
