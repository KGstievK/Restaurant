<<<<<<< HEAD
import VisitRestaurant from './AllSections/fifthSection/VisitRestaurant'
import Delicious from './AllSections/firstSection/Delicious'
import Interior from './AllSections/fourthSection/Interior'
import Menu from './AllSections/menuSection/menusection'
import About from './AllSections/secondSection/About'
import BestSellers from './AllSections/thirdSection/BestSellers'

const Home = () => {
	return (
		<div>
			<Delicious />
			<About />
			<BestSellers />
			<Menu />
			<Interior />
			<VisitRestaurant />
		</div>
	)
}
=======
import VisitRestaurant from "./AllSections/fifthSection/VisitRestaurant";
import Delicious from "./AllSections/firstSection/Delicious";
import Interior from "./AllSections/fourthSection/Interior";
import MenuSection from "./AllSections/MenuSection/MenuSection";
import About from "./AllSections/secondSection/About";
import BestSellers from "./AllSections/thirdSection/BestSellers";

const Home = () => {
  return (
    <div>
      <Delicious />
      <About />
      <BestSellers />
      <MenuSection/>
      <Interior />
      <VisitRestaurant />
    </div>
  );
};
>>>>>>> 2814f2d9de884db401fd843c14151d371b69e630

export default Home
