import { MdAdd, MdClose } from "react-icons/md";
import { useState } from "react";

const TagInput = ({ tags, setTags }) => {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addNewTags = () => {
    if (input.trim() !== "") {
      setTags([...tags, input.trim()]);
      setInput("");
    }
  };

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      addNewTags();
    }
  };

  const removeTags = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div>
      {tags?.length > 0 && (
        <div className=" flex items-center gap-2 flex-wrap  mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="">
              {" "}
              # {tag}
              <button
                onClick={() => {
                  removeTags(tag);
                }}
              >
                {" "}
                <MdClose />{" "}
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center gap-4 mt-3">
        <input
          type="text"
          className="text-sm bg-transparent border px-3 py-2 rounded outline-none"
          placeholder="add tags"
          onChange={handleInputChange}
          onKeyDown={handleKeydown}
        />
        <button
          className=" flex w-8 h-8 justify-center items-center rounded border border-blue-600 hover:bg-blue-700"
          onClick={() => {
            addNewTags();
          }}
        >
          <MdAdd className="text-2xl text-blue-700 hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
