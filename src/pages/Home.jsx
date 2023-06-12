import Button from "../components/Button";
import Navbar from "../components/Navbar";
import banner2 from "../assets/banner2.png";
import brand from "../assets/brand.png";


const Home = () => {
  return (
    <>
      <Navbar />
      <div className=" md:px-36 md:py-20 p-6 bg-[#2C1338]">
        <div className="flex md:flex-row flex-col gap-10">
          <div className="flex flex-col gap-8">
            <h1 className="md:text-6xl text-2xl max-w-xl font-medium text-white">
              Time tracking that's easy, powerful, and frictionless.
            </h1>
            <p className="text-white max-w-lg text-base ">
              Time tracking software to boost performance and get paid for every
              billable minute. An intuitive tool that makes time tracking
              painless for the entire team.
            </p>
            <div className="md:flex-row flex flex-col gap-5 items-center">
              <Button name="Start tracking free" color="text-white" bg="bg-[#E57CD8]" />
              <p className="text-white text-base font-semibold">
                Or explore Toggl Track
              </p>
            </div>
          </div>
          <div>
            <img src={banner2} alt="banner-img" />
          </div>
        </div>
        <div>
          <p className="text-[#D5D0D7] font-medium text-base">TRUSTED BY OVER 5 MILLION USERS ACROSS 120 COUNTRIES</p>
          <div className="mt-5 w-[80%]">
            <img src={brand} alt="brand-logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
