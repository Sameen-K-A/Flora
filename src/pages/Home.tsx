import HeaderSection from "@/components/home/HeaderSection";
import Trending from "@/components/home/Trending";
import WelcomeMaquee from "@/components/home/WelcomeMaquee";

const Home = () => {
  return (
    <>
      <WelcomeMaquee />
      <HeaderSection />
      <Trending />
    </>
  );
};

export default Home;