import NoteCard from "../../components/card/noteCard";
import Navbar from "./../../components/Navbar/Navbar";
import { MdAdd } from "react-icons/md";
import AddEditNote from "./AddEditNote";
import { useState } from "react";
import Modal from "react-modal";

//
const Home = () => {
  const [openAddEditNote, setOpenAddEditNote] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="On Tuesday"
            date="28 May 2024"
            content="Job Fair helod on Tuesday"
            tags={["#work", "#job"]}
            ispinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinnedNote={() => {}}
          />
        </div>
      </div>

      <button
        className=" w-16 h-16  flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditNote({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      {/*  */}

      <Modal
        isOpen={openAddEditNote.isShown}
        onRequestClose={() => {}}
        style={{ overlay: { backgroundColor: "rgba(0,0,0,0.2)" } }}
        contetLabel=""
        className=" w-[40%] max-h-3/4  bg-white  rounded-md mx-auto  mt-14  p-5  overflow-scroll"
      >
        <AddEditNote />
      </Modal>
    </>
  );
};

export default Home;
