import blog from "../assets/blog.jpg";
import time from "../assets/timesheet.jpg";
import fullstck from "../assets/fullstackl.jpg";
import wfo from "../assets/wfo.png";
import world from "../assets/world.jpg";

const Blog = () => {
  return (
    <div className="flex flex-col gap-9 items-center md:px-24 px-7 mt-20">
      <h1 className="text-[#412A4C] text-center md:text-5xl text-3xl  leading-snug font-semibold md:max-w-3xl">
        Run your business at full efficiency. Learn with Toggl.
      </h1>
      <p className="text-gray-600 text-center sm:text-xl text-base max-w-full md:max-w-3xl">
        While there's no one right way to do things, there are many
        tried-and-tested ways. Check out our resources and our blog for tips and
        tricks on better work.
      </p>
      <div className="blog">
        <div className="sm:px-10 px-4 flex  flex-col gap-5 rounded-lg">
          <h2 className=" text-[#412A4C] text-2xl font-medium">
            The Toggl Blog
          </h2>
          <p className="text-[#6B5A74]">
            Managing growth, increasing growth, hiring, and more — we talk about
            them all!
          </p>
          <img src={blog} className="w-full h-full rounded-md" alt="" />
        </div>
        <div className="sm:px-10 px-4 flex flex-col gap-5 rounded-lg">
          <h2 className="text-[#412A4C] text-2xl font-medium mt-4">
            Toggl Track Case Studies
          </h2>
          <p className="text-[#6B5A74]">
            From increasing project profitability to managing team resources
          </p>
          <img src={fullstck} className="w-full h-full" alt="" />
        </div>
        <div className="sm:px-10 px-4 flex flex-col gap-5 rounded-lg">
          <h2 className="text-[#412A4C] text-2xl font-medium mt-4">
            Track's Productivity
          </h2>
          <p className="text-[#6B5A74]">
            Try these resources that we've gathered throughout our years in the
            productivity
          </p>
          <img src={time} className="w-full h-full" alt="" />
        </div>
      </div>
        <div className="mt-10 flex md:flex-row flex-col gap-4 items-center">
          <div className="flex items-center gap-4">
            <div>
              <img src={wfo} className="rounded-md" alt="" />
            </div>
            <div>
              <h1 className="text-[#412A4C]  md:text-2xl text-lg">Work From Home Hub</h1>
              <p className="text-[#6B5A74] md:text-base text-sm">
                With the right resources, working from home can be an enriching
                experience
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <img src={world} className="rounded-md" alt="" />
            </div>
            <div>
              <h1 className="text-[#412A4C] md:text-2xl text-lg">Work From Home Hub</h1>
              <p className="text-[#6B5A74] md:text-base text-sm">
                With the right resources, working from home can be an enriching
                experience
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Blog;
