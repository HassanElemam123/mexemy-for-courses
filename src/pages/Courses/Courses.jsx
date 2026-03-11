import Navbar from "../../Navbar/Navbar"
import CoursesGrid from "./components/LastCourseGrid/LastGrid"
import Footer from "../../Footer/Footer" 

export default function Home() {
  return (
    <>
      <Navbar />
      <CoursesGrid />
      <Footer />
    </>
  );
}