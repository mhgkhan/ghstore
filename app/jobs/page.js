import AllJobsBlock from '@/components/ui/pages/AllJobsBlock'
import Filter from '@/components/ui/pages/Filter'
import React from 'react'

const page = () => {
  return (
    <main>
      <section className="intro-jobs">
        <div className="container">
          <br /><br />
          <h1>Latest Jobs World wide .</h1>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque culpa quas et illo. Excepturi vitae, magni velit nihil tempore eius inventore eaque, corporis vero officiis dolor praesentium nesciunt tenetur eligendi!</p>

          <Filter />


          <div className="alljobs-container"> 
            <AllJobsBlock />
          </div>

          <div className='accordian'>
            {/* here make accordian  */}
          </div>

        </div>
      </section>
    </main>
  )
}

export default page
