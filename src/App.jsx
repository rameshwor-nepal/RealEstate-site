
import './App.css'
// import Areaproperty from './component/Areaproperty/Areaproperty'
// import Hero from './component/Hero/Hero'
// import LatestProperty from './component/LatestProperty/LatestProperty'
// import CategoryProperties from './component/CategoryProperties/CategoryProperties'
// import Testimonials from './component/Testimonials/Testimonials'
// import OurTeam from './component/OurTeam/OurTeam'
// import Footer from './component/Footer/Footer'

import {Route , Routes  } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DetailPage from './pages/DetailPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail-page" element={<DetailPage />} />
    </Routes>
  )
}

export default App
