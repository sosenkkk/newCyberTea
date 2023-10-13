import "./App.css";
import Carousel from "../Components/Carousel/Carousel";
import Navbar from "../Components/Navbar/Navbar";
import CardSlider from "../Components/CardSlider/CardSlider";
import NewsSchedule from "../Components/ScheduleAndRegister/ScheduleAndRegister";
import FooterComponent from "../Components/FooterComponent/FooterComponent";
import Registration from "../Components/Registration/Registration";
import TopHeader from "../Components/Top Header/Header";
import About from "../Components/About/About";
import Patron from "../Components/Patron/Patron";
import TeamHolder from "../Components/Team/TeamHolder";

function App() {
  return (
    <>
      <Navbar />
      <TopHeader />
      <div id="pot">
        <h1> Last date for registration is 20th November 2023.</h1>
      </div>
      <Carousel />
      <div className="about_container">
        <About />
      </div>
      <Patron />
      <CardSlider />
      <NewsSchedule />
      <TeamHolder />
      <FooterComponent />
    </>
  );
}

export default App;
