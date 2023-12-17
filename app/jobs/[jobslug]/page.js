import React from 'react'
import { IoDownload } from 'react-icons/io5'

const page = ({ params }) => {
    return (
        <main>
            <div className="container jobpage">
                <h1> {params.jobslug} </h1>
                <dl>
                    <div>
                        <dt>Locations</dt>
                        <dd>Pakistan</dd>
                        <dd>United States </dd>
                        <dd>Canada</dd>
                    </div>

                    <div>
                        <dt>Categories</dt>
                        <dd>Python</dd>
                        <dd>C++</dd>
                        <dd>web developer</dd>
                    </div>

                    <div>
                        <dt>Job Type</dt>
                        <dd>Remote</dd>
                        <dd>HOme based</dd>
                        <dd>Fulltime</dd>
                    </div>

                </dl>


                <br /><br /><br />
                <h3 className='jobpagedesc'>Job Description </h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ut excepturi non, tenetur corrupti qui doloremque consequuntur necessitatibus temporibus dolorem. Blanditiis enim, eligendi nemo pariatur iure veniam, labore, facere hic sit odit voluptatibus? Mollitia maiores dolorem nemo laudantium, dignissimos commodi eaque qui iste quos molestiae at quae facilis! Repellendus cupiditate, possimus libero non quidem odit recusandae dignissimos accusantium reprehenderit iure veritatis id eos magni beatae voluptatum voluptatibus culpa. Aspernatur quae maiores debitis iusto cupiditate aliquid, illum accusamus, ducimus eius, autem voluptatem consequuntur dolor adipisci amet! Voluptatum velit dolor accusamus quas corporis adipisci? Aliquam id perspiciatis, maiores voluptatem iure veniam explicabo ipsum repudiandae. Dolorum ipsum qui at quod dolore facere, earum vel reprehenderit. Fugiat optio voluptas asperiores! Commodi, itaque delectus nisi, reprehenderit et rem accusamus aliquid voluptatibus ullam architecto ducimus ab obcaecati consectetur unde dolor. Consequatur ab aut a illo corrupti sint nesciunt id .</p>


            <br /><br />
            <button className='default_button'><IoDownload /> Advertaisment</button>
            <button className='default_button'>Apply </button>
            <br /><br />
            </div>
        </main>
    )
}

export default page
