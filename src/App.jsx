import './App.css'
import Carousel from "../Components/Carousel/Carousel"
import Navbar from "../Components/Navbar/Navbar"
// import CardSlider from "./Components/CardSlider/CardSlider"
// import NewsSchedule from "./Components/NewsSchedule/NewsSchedule"
// import FooterComponent from "./Components/FooterComponent/FooterComponent"
// import Registration from "./Components/Registration/Registration"
import TopHeader from "../Components/Top Header/Header"

function App() {

  return (
    <>
      <Navbar />
      <TopHeader/>
      <Carousel />
      {/* <CardSlider />
      <NewsSchedule />
      <Registration />
      <FooterComponent /> */}
    </>
  )
}

export default App