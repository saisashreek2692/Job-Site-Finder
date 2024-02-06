import { FiClock } from "react-icons/fi";

const Data = [
  {
    id: 1,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Asperiores, illum quis repellat laboriosam",
    company: "Company Name",
  },
  {
    id: 2,
    title: "Soft Enginner",
    time: "2 Hrs",
    location: "Ireland",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Asperiores, illum quis repellat laboriosam",
    company: "Company Name",
  },
  {
    id: 3,
    title: "DevOps Architect",
    time: "5 Hrs",
    location: "Australia",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Asperiores, illum quis repellat laboriosam",
    company: "Company Name",
  },
  {
    id: 4,
    title: "React JS Developer",
    time: "Now",
    location: "India",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Asperiores, illum quis repellat laboriosam",
    company: "Company Name",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    time: "Now",
    location: "USA",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Asperiores, illum quis repellat laboriosam",
    company: "Company Name",
  },
  {
    id: 6,
    title: "DevOps Architect",
    time: "5 Hrs",
    location: "Australia",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Asperiores, illum quis repellat laboriosam",
    company: "Company Name",
  },
  {
    id: 7,
    title: "React JS Developer",
    time: "Now",
    location: "India",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Asperiores, illum quis repellat laboriosam",
    company: "Company Name",
  },
  {
    id: 8,
    title: "DevOps Engineer",
    time: "Now",
    location: "USA",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit Asperiores, illum quis repellat laboriosam",
    company: "Company Name",
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, title, time, location, desc, company }) => {
          return (
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <FiClock /> {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>
              <div className="company flex items-center gap-2">
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
