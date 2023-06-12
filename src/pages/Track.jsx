import flower from "../assets/flower.png";
import devices from "../assets/devices.png";
import heart from "../assets/heart.png";

const Track = () => {
  return (
    <div className="flex flex-col gap-9 items-center md:px-36 px-7 mt-20">
      <h1 className="text-[#412A4C] text-center md:text-5xl text-3xl max-w-full  leading-normal font-semibold md:max-w-3xl">
        Time tracking is good for business. But it’s also a dreaded chore.
      </h1>
      <p className="text-gray-600 text-center md:text-2xl max-w-full text-xl md:max-w-2xl">
        Skip the timesheets and get your team the best time tracker that gets
        the job done for you.
      </p>
      <h1 className="text-[#412A4C] text-center text-3xl md:mb-0 mb-7 font-semibold">
        Here's why teams <span className="text-[#E57CD8]">love</span> Track:
      </h1>
      <div className="md:flex-row flex flex-col gap-8">
        <div className="px-10 bg-[#FFEBBD] flex  flex-col gap-5 items-center rounded-lg">
          <img src={flower} className="h-[240px] relative -top-12" alt="" />
          <h2 className="-mt-11 text-[#412A4C] text-2xl font-medium">
            Record 25% more billable hours and improve profitability
          </h2>
          <p className="text-[#6B5A74] mb-8">
            No more guesstimates and lost billables. Track your time accurately,
            improve operational efficiency—and ultimately, maximize your
            profits.
          </p>
        </div>
        <div className="px-10 bg-[#F7D8F3] flex flex-col gap-5 items-center rounded-lg">
          <img src={devices} className="h-[100px] mt-10" alt="" />
          <h2 className="text-[#412A4C] text-2xl font-medium mt-4">
            Multiple time tracking apps and over 100+ integrations
          </h2>
          <p className="text-[#6B5A74] mb-8">
            Connect your entire stack, and track time wherever you work—on the
            web app, on your browser, desktop, mobile or even your watch.
          </p>
        </div>
        <div className="px-10 bg-[#FDEAE2] flex flex-col gap-5 items-center rounded-lg">
          <img src={heart} className="h-[100px] mt-10" alt="" />
          <h2 className="text-[#412A4C] text-2xl font-medium mt-4">
            Get employee buy-in with time tracking that puts privacy on priority
          </h2>
          <p className="text-[#6B5A74] mb-8">
            Get accurate data with an anti-surveillance time tracking solution
            that your employees are happy to use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Track;
