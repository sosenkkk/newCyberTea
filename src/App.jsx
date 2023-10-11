import "./App.css";
import Carousel from "../Components/Carousel/Carousel";
import Navbar from "../Components/Navbar/Navbar";
import CardSlider from "../Components/CardSlider/CardSlider";
import NewsSchedule from "../Components/NewsSchedule/NewsSchedule";
import FooterComponent from "../Components/FooterComponent/FooterComponent";
import Registration from "../Components/Registration/Registration";
import TopHeader from "../Components/Top Header/Header";
import About from "../Components/About/About";
import Patron from "../Components/Patron/Patron";

function App() {
  return (
    <>
      <Navbar />
      <TopHeader />
      <Carousel />
      <div className="about_container">
        <About />
      </div>
      <Patron />
      <CardSlider />

      <NewsSchedule />
      <FooterComponent />
    </>
  );
}

export default App;
