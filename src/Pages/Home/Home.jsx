import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Banner2 from "../../Components/Banner/Banner2";
import Card from "../../Components/Card/Card";
import Products from "../../Components/Products/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Banner2 />
      <Card />
      <AboutUs />
      <Products />
    </div>
  );
};

export default Home;
