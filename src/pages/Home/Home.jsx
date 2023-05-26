import Banner from "./components/Banner";
import CallUsNow from "./components/CallUsNow";
import FutureProduct from "./components/FutureProduct";
import PopularMenu from "./components/PopularMenu";
import ProductSlider from "./components/ProductSlider/ProductSlider";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <ProductSlider />
      <PopularMenu />
      <CallUsNow />
      <FutureProduct />
      <Testimonials />
    </>
  );
};

export default Home;
