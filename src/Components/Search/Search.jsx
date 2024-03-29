import { FiSearch, FiXCircle, FiBriefcase, FiNavigation } from "react-icons/fi";

const Search = () => {
  return (
    <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
          <div className="flex gap-2 items-center">
            <FiSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Jobs Here......."
            />
            <FiXCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>

          <div className="flex gap-2 items-center">
            <FiBriefcase className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search By Company......."
            />
            <FiXCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>

          <div className="flex gap-2 items-center">
            <FiNavigation className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search By Location......."
            />
            <FiXCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>
          <button className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-500">Search</button>
        </div>
      </form>

      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
            <label htmlFor="relevance" className="text-[#808080] font-semibold">Sort By: </label>
            <select name="" id="relevance">
                <option value="">Relevance</option>
                <option value="">Inclusive</option>
                <option value="">Starts With</option>
                <option value="">Contains</option>
            </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
            <label htmlFor="type" className="text-[#808080] font-semibold">Type: </label>
            <select name="" id="type">
                <option value="">Full Time</option>
                <option value="">Part Time</option>
                <option value="">Contract</option>
                <option value="">Remote</option>
            </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
            <label htmlFor="level" className="text-[#808080] font-semibold">Level: </label>
            <select name="" id="level">
                <option value="">Senior</option>
                <option value="">Beginner</option>
                <option value="">Intermediate</option>
                <option value="">Advocate</option>
            </select>
        </div>

        <span className="text-[#a1a1a1] cursor-pointer">Clear All</span>
        
      </div>

    </div>
  );
};

export default Search;
