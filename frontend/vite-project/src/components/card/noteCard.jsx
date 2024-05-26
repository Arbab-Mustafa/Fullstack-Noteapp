import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";

//
const NoteCard = ({
  title,
  date,
  content,
  tags,
  ispinned,
  onEdit,
  onDelete,
  onPinnedNote,
}) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl trasition-all ease-in-out">
      <div className=" flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs slate-500">{date}</span>
        </div>
        <MdOutlinePushPin
          className={`icon-btn ${
            ispinned ? "text-primary" : "text-slate-500"
          } `}
          onClick={onPinnedNote}
        />
      </div>
      <p className="text-xs text-slate-300 mt-2"> {content?.slice(0, 60)}</p>
      <div className=" flex items-center justify-between mt-2">
        <div className="text-xs text-slate-500">
          {tags?.map((tag) => (
            <span key={tag} className="">
              {tag}
            </span>
          ))}
        </div>
        <div className=" flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:text-green-600 cursor-pointer"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn hover:text-red-600 cursor-pointer"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
