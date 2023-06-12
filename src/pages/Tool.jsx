import ballon from "../assets/balloons.png";
import screen from "../assets/screen-plan.png";
import done from "../assets/icon-done.png";
import Button from "../components/Button";
import hire from '../assets/screen-hire.png'

const Tool = () => {
  return (
    <div className="md:px-36 py-20 p-6 bg-[#2C1338]">
      <div className="flex md:flex-row flex-col md:gap-10 gap-5">
        <div>
          <h1 className="text-white md:text-5xl text-xl font-medium max-w-4xl leading-tight mb-12">
            Toggl builds tools to make your work life more efficient. Toggl
            Track is our time tracker.
          </h1>
          <p className="text-[#FFDE91] md:text-5xl text-lg">But we have more.</p>
        </div>
        <div>
          <img src={ballon} alt="" />
        </div>
      </div>
      <div className="px-8 py-4 rounded-md relative z-0 bg-[#EEE4FD]">
        <p className="text-[#A876F5] font-bold">
          WANT A SIMPLE TOOL TO MANAGE ALL YOUR{" "}
          <br className="md:flex hidden" /> PRODUCTS IN ONE PLACE?
        </p>
        <div className="flex md:flex-row flex-col mt-5 gap-1">
          <div>
            <h1 className="text-[#2C1338] font-medium md:max-w-md max-w-full leading-tight mb-7 text-3xl md:text-5xl">
              Effortless work planning for teams with
            </h1>
            <p className="text-[#564260] md:text-xl text-base md:max-w-lg">
              Visually plan, track, and deliver work projects without the
              last-minute rush and stress. With Toggl Plan's delightfully simple
              drag-and-drop timelines, you can:
            </p>
            <div className="flex gap-4 items-center mt-7">
              <img src={done} alt="" />
              <p className="text-[#564260] md:text-xl text-base max-w-lg ">
                Create effective work schedules without clunky spreadsheets or
                complex software
              </p>
            </div>
            <div className="flex gap-4 mt-7 items-center">
              <img src={done} alt="" />
              <p className="text-[#564260] md:text-xl text-base  md:max-w-lg max-w-full">
                Icon of a thumbs up Create effective work schedules without
                clunky spreadsheets or complex software
              </p>
            </div>
            <div className="flex gap-4 items-center mt-7">
              <img src={done} alt="" />
              <p className="text-[#564260] md:text-xl text-base md:max-w-lg max-w-full ">
                Get visibility into your team's availability and workload
              </p>
            </div>
          </div>
          <div>
            <img src={screen} className="z-10" alt="" />
            <div className="bg-[#E7D9FC] md:flex hidden mb-10 rounded-full w-96 h-96 absolute right-32 bottom-32 -z-10">
            </div>
            <p className="flex font-medium text-lg max-w-xs justify-center mt-9 md:mt-0 md:relative left-32 -bottom-8 text-center">
                Using spreadsheets to manage multiple projects was a disaster.
                With Toggl Plan, we can easily keep track of ten or more
                projects at a time.
              </p>
          </div>
        </div>
        <div className="flex md:flex-row text-center flex-col md:gap-10 gap-5 md:mt-20 mt-6 justify-center mb-12 items-center">
          <h1 className="text-[#2C1338]  font-medium leading-tight md:text-4xl text-xl">
            See what better work planning looks like:
          </h1>
          <Button
            name="Start tracking free"
            color="text-white"
            bg="bg-[#A876F5]"
          />
        </div>
      </div>

      <div className="px-8 py-4 rounded-md relative z-0 mt-10 bg-[#FFF3F2]">
        <p className="text-[#FF8A7A] font-bold">
          WANT A SIMPLE TOOL TO MANAGE ALL YOUR{" "}
          <br className="md:flex hidden" /> PRODUCTS IN ONE PLACE?
        </p>
        <div className="flex md:flex-row flex-col mt-5 gap-1">
          <div>
            <h1 className="text-[#2C1338] font-medium md:max-w-md max-w-full leading-tight mb-7 text-3xl md:text-5xl">
              Effortless work planning for teams with
            </h1>
            <p className="text-[#564260] md:text-xl text-base md:max-w-lg">
              Visually plan, track, and deliver work projects without the
              last-minute rush and stress. With Toggl Plan's delightfully simple
              drag-and-drop timelines, you can:
            </p>
            <div className="flex gap-4 items-center mt-7">
              <img src={done} alt="" />
              <p className="text-[#564260] md:text-xl text-base max-w-lg ">
                Create effective work schedules without clunky spreadsheets or
                complex software
              </p>
            </div>
            <div className="flex gap-4 mt-7 items-center">
              <img src={done} alt="" />
              <p className="text-[#564260] md:text-xl text-base  md:max-w-lg max-w-full">
                Icon of a thumbs up Create effective work schedules without
                clunky spreadsheets or complex software
              </p>
            </div>
            <div className="flex gap-4 items-center mt-7">
              <img src={done} alt="" />
              <p className="text-[#564260] md:text-xl text-base md:max-w-lg max-w-full ">
                Get visibility into your team's availability and workload
              </p>
            </div>
          </div>
          <div>
            <img src={hire} className="z-10" alt="" />
            <div className="bg-[#FFE8E5] md:flex hidden mb-10 rounded-full w-96 h-96 absolute right-32 bottom-32 -z-10">
            </div>
            <p className="flex font-medium text-lg max-w-xs justify-center mt-9 md:mt-0 md:relative left-32 -bottom-8 text-center">
                Using spreadsheets to manage multiple projects was a disaster.
                With Toggl Plan, we can easily keep track of ten or more
                projects at a time.
              </p>

          </div>
        </div>
        <div className="flex md:flex-row text-center flex-col md:gap-10 gap-5 md:mt-20 mt-6 justify-center mb-12 items-center">
          <h1 className="text-[#2C1338]  font-medium leading-tight md:text-4xl text-xl">
          See what time-efficient hiring looks like:
          </h1>
          <Button
            name="Start tracking free"
            color="text-white"
            bg="bg-[#FF8A7A]"
          />
        </div>
      </div>

    </div>
  );
};

export default Tool;
