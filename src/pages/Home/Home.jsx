import Landing from "./components/LandingHome/Landing.jsx";
import Features from "./components/Features/Features.jsx";
import Top from "./components/TopCourses/Top.jsx"
import Workshop from "../../components/workshop/workshop";
import Skilled from "./components/Skilled/Skilled.jsx"
import Subscripe from "./components/Subscripe/Subscripe.jsx";
import Blogs from "./components/Blogs/Blogs.jsx"

export default function Home() {
  return (
    <>
      <Landing/>
      <Features />
      <Top />
      <Workshop />
      <Skilled />
      <Subscripe />
      <Blogs />
    </>
  );
}