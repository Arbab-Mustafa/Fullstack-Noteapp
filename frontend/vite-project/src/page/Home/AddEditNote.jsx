import TagInput from "../../components/input/TagInput";

const AddEditNote = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="input-label">Title</label>
        <input
          type="text"
          placeholder="Enter title"
          className="text-2xl text-slate-950 outline-none"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">Content</label>
        <textarea
          placeholder="Enter content"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          rows={10}
        />
      </div>
      <div className="mt-3">
        <label className="input-label">Tags</label>
        <TagInput />
      </div>
      <button className="btn-primary  font-medium mt-5 p-3"> Add</button>
    </div>
  );
};

export default AddEditNote;
