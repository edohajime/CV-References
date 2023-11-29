import Header from "./components/Header";
import Footer from "./components/Footer";
import TraditionalMedicine from "./components/TraditionalMedicine";
import TraditionalMedicine1 from "./components/TraditionalMedicine1";
import Banner from "./components/Banner";
import Healthy from "./components/Healthy";
import TopDoctors from "./components/TopDoctors";
import TerminallyIll from "./components/TerminallyIll";
import TopHospitals from "./components/TopHospitals";
import DoctorsLikeMother from "./components/DoctorsLikeMother";
import Achievements from "./components/Achievements";
import TopExcellentPosts from "./components/TopExcellentPosts";
import Reels from "./components/Reels";

const Home = ({user}) => {
  return (
    <>
      <Header />
      <Reels />
      <DoctorsLikeMother />
      <TraditionalMedicine />
      <Banner />
      <Achievements />
      <Healthy />
      <TopHospitals />
      <TraditionalMedicine1 />
      <TopDoctors />
      <TerminallyIll />
      <TopExcellentPosts />
      <Footer />
    </>
  );
};
export default Home;
