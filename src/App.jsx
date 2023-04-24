
import './App.css'
import Areaproperty from './component/Areaproperty/Areaproperty'
import Hero from './component/Hero/Hero'
import LatestProperty from './component/LatestProperty/LatestProperty'
import CategoryProperties from './component/CategoryProperties/CategoryProperties'
import Testimonials from './component/Testimonials/Testimonials'
import OurTeam from './component/OurTeam/OurTeam'
import Footer from './component/Footer/Footer'

function App() {

  return (
    <div className="App">
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

export default App
