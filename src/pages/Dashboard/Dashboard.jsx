import Navbar from "../../Navbar/Navbar.jsx";
import Landing from "./components/LandingDashboard/Landing.jsx";
import Features from "./components/Features/Features.jsx";
import Top from "./components/TopCourses/Top.jsx"
import Workshop from "./components/workshop/workshop.jsx";
import Skilled from "./components/Skilled/Skilled.jsx"
import Subscripe from "./components/Subscripe/Subscripe.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing/>
      <Features />
      <Top />
      <Workshop />
      <Skilled />
      <Subscripe/>
    </>
  );
}