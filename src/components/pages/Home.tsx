import VisitRestaurant from "./AllSections/fifthSection/VisitRestaurant";
import Delicious from "./AllSections/firstSection/Delicious";
import Interior from "./AllSections/fourthSection/Interior";
import About from "./AllSections/secondSection/About";
import BestSellers from "./AllSections/thirdSection/BestSellers";
import HomeSection from "./HomeSections/HomeSection";

const Home = () => {
  return (
    <div>
      <Delicious />
      <About />
      <BestSellers />
      <Interior />
      <VisitRestaurant />
      <HomeSection />
    </div>
  );
};

export default Home;
