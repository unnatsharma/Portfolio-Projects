import Boxes from "../Components/Boxes";
import Contact from "../Components/Contact";
import FrontSection from "../Components/FrontSection";
import Instructors from "../Components/Instructors";
import LearnAgain from "../Components/LearnAgain";
import LearnSection from "../Components/LearnSection";
import NewsLetter from "../Components/NewsLetter";
import Questions from "../Components/Questions";

const Home = () => {
  return (
    <>
      <FrontSection />
      <NewsLetter />
      <Boxes />
      <LearnSection />
      <LearnAgain />
      <Questions />
      <Instructors />
      <Contact />
    </>
  );
};

export default Home;
