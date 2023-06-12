import badgesTrack from "../assets/badges-track.png";
import Button from "../components/Button";

const UserSay = () => {
  return (
    <div className="flex flex-col items-center md:gap-8 gap-4 mt-20">
      <img src={badgesTrack} className="md:w-[35%] w-[80%]" alt="" />
      <h1 className="text-[#412A4C] text-center md:text-4xl text-2xl px-7 leading-normal font-semibold">
        5 million+ users have said yes to Track
      </h1>
      <div className="md:flex-row flex flex-col gap-5 items-center">
        <Button name="Start tracking free" color="text-white" bg="bg-[#E57CD8]" />
        <p className="text-[#564260] text-base font-semibold">
          Or explore Toggl Track
        </p>
      </div>
    </div>
  );
};

export default UserSay;
