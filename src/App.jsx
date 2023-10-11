import { CardSlider } from "./components/CardSlider/CardSlider"
import Carousel from "./Components/Carousel/Carousel"
import Navbar from "./Components/Navbar/Navbar"
import './App.css'
import NewsSchedule from "./Components/NewsSchedule/NewsSchedule"
import FooterComponent from "./Components/FooterComponent/FooterComponent"
import Registration from "./Components/Registration/Registration"
import Fornt from "./components/Front"
import TopHeader from "./components/Top Header/Header"

function App() {

  return (
    <>
      <Navbar />
      <TopHeader/>
      <Carousel />
      <CardSlider />
      <NewsSchedule />
      <Registration />
      <FooterComponent />
    </>
  )
}

export default App