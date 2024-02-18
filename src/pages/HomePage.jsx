import React from "react";

import Areaproperty from '../component/Areaproperty/Areaproperty'
import Hero from '../component/Hero/Hero'
import LatestProperty from '../component/LatestProperty/LatestProperty'
import CategoryProperties from '../component/CategoryProperties/CategoryProperties'
import Testimonials from '../component/Testimonials/Testimonials'
import OurTeam from '../component/OurTeam/OurTeam'
import Footer from '../component/Footer/Footer'

const HomePage = () => {
    return (
      <div>
          <Hero />
          <Areaproperty />
          <LatestProperty />
          <CategoryProperties />
          <Testimonials />
          <OurTeam />
          <Footer />
      </div>
    )
  }
  
  export default HomePage