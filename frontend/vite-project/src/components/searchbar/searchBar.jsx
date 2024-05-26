/* eslint-disable react/prop-types */
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
//
const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-80 flex items-center px-4 bg-slate-100 rounded-md">
      <input
        type="text"
        placeholder="Search Notes"
        value={value}
        onChange={onChange}
        className=" w-full text-xs  bg-transparent px-2 py-[11px] outline-none  "
      />
      {value && (
        <IoMdClose
          className="text-xl cursor-pointer text-slate-400 mx-2 hover:text-black"
          onClick={onClearSearch}
        />
      )}
      <FaMagnifyingGlass
        className="text-slate-400 cursor-pointer  hover:text-slate-900"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
