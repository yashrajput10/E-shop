import { useContext } from "react";
import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const HomePage = () => {
    return (
      <Layout>
          <HeroSection />
          <Category />
          <HomePageProductCard />
          <Track />
      </Layout>
      
    );
  }
  
  export default HomePage;