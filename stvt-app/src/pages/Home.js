import Blog from "./components/Blog";
import Experts from "./components/Experts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Participants from "./components/Participants";
import Partners from "./components/Partners";
import Sales from "./components/Sales";
import Services from "./components/Services";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <div>
      <Header />

      <Slider />

      <Services />

      <Participants />

      <Experts />

      <Blog />

      <Sales />

      <Partners />

      <Footer />
    </div>
  );
}
