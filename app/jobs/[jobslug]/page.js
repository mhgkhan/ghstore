import React from 'react'

const page = ({ params }) => {
    return (
        <main>
            <div className="container">
                <h1>hello job title : <br /> {params.jobslug}</h1>
            </div>
        </main>
    )
}

export default page
