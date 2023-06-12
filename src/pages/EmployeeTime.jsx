import employee from "../assets/employee.png";
import Button from "../components/Button";

const EmployeeTime = () => {
  return (
    <div className="md:px-36 md:py-20 mt-20 flex flex-col gap-10 p-6 bg-[#FDF1EC]">
      <h1 className="md:text-4xl text-2xl md:max-w-2xl max-w-full font-medium text-[#412A4C]">
        Time tracking software for all your productivity and profitability needs
      </h1>
      <div className="md:flex-row flex flex-col gap-5 items-center">
        <Button
          name="Employee time tracking"
          color="text-[#FFDE91]"
          bg="bg-[#412A4C]"
        />
        <Button
          name="Billing & invoicing"
          color="text-[#412A4C]"
          bg="bg-[#FFDE91]"
        />
        <Button
          name="Project budgeting"
          color="text-[#412A4C]"
          bg="bg-[#FFDE91]"
        />
        <p className="text-[#564260] text-base font-semibold">
          See more use cases
        </p>
      </div>

      <div className="flex md:flex-row flex-col gap-10">
        <div className="flex flex-col gap-8">
          <h1 className="md:text-4xl md:max-w-sm text-3xl  font-medium text-[#412A4C]">
            Boost accountability across teams
          </h1>
          <p className="text-[#6B5A74] max-w-lg text-lg">
            Stay informed, accountable, and transparent. Make payroll and
            quarterly reporting easy with intuitive time tracking and accurate
            time reports for growing teams.
          </p>
          <p className="text-[#EA96E0] text-base font-semibold">
            Learn more about employee time tracking
          </p>
          <div className="border-l-4 border-[#412A4C]">
            <p className="text-[#6B5A74] max-w-lg text-lg ml-5 mb-5">
              "Toggl Track offers full control to our team members to accurately
              track their time. It is extremely easy and intuitive, as well as
              non-invasive."
            </p>
            <a href="" className="ml-5 font-bold underline text-[#412A4C] opacity-70">Newlogic, Software Consultancy</a>
          </div>
        </div>
        <div>
          <img src={employee} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EmployeeTime;
