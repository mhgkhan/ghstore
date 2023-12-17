
import React from 'react'
import JobItem from './JobItem'
import JobJson from '@/other/Jobs.json'



const fetchJobs = async ()=>{
    const reqwithres = await (await fetch("https://zobjobs.com/api/jobs")).json();
    return reqwithres
}

const AllJobsBlock = async () => {

    const jobs =  await fetchJobs();
    // console.log(jobs['jobs'])
    

    return (
        <div className="all-jobs-block">
            <h3>Latest jobs </h3>
            <div className="job" id='jobsheader'>

                <p className='sno'>S.NO</p>
                <p className='desc'>Description</p>
                <p className='action'>Action</p>

            </div>


           {jobs && jobs['jobs'].map((job,index)=>{
            return <JobItem serial={index+1} desc={job.description} slug={job.slug} title={job.title} companyurl={job.url} category={{...job.category}} country={job.country}  link={job.link} location={job.location} stard={job.created} expre={job.expires} code={job.unique} key={job.unique} />
           })}



        </div>
    )
}

export default AllJobsBlock
