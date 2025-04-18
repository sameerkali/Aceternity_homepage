import Hero from "./Hero";
import ScrollVelocity from "../TextAnimations/ScrollVelocity/ScrollVelocity";
import WhyUs from "./WhyUs";
import Partners from "./Partners";
import NationwideCoverage from "../components/NationwideCoverage/NationwideCoverage";
import InfiniteMenu from "../components/InfiniteMenu/InfiniteMenu";
import { InfiniteMenuTrucks } from "../content";


const Home = () => {
  
  return (
    <div className="pb-20">
      <Hero />
      <ScrollVelocity
        texts={["Transport Solutions", "Reliable Service"]}
        velocity={50}
        className="custom-scroll-text"
      />
      <WhyUs />
      <Partners />
      <NationwideCoverage />
      <div style={{ height: "600px", position: "relative" }}>
        <InfiniteMenu items={InfiniteMenuTrucks} />
      </div>
      
      {/* Contact Section */}

      {/* <HomeContact /> */}
    </div>
  );
};

export default Home;
