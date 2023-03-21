import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, changeNoteActiveColor } from "../store/NotesSlice";

import { BsCheckLg } from "react-icons/bs";

const Form = () => {
  const dispatch = useDispatch();
  const [note, setNote] = useState("");
  const activeColor = useSelector((state) => state.notes.activeColor);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!note) {
      alert("Error: Please anter a note!");
      return;
    }

    //!add note
    dispatch(addNote(note, activeColor));

    //!clear
    setNote("");
  };

  return (
    <form
      className="mt-10 w-full h-full flex flex-col items-center"
      onSubmit={handleSubmit}
    >
      <textarea
        name="todo"
        id="todo"
        className="w-5/6 h-40 px-5 py-4 focus:outline-none bg-slate-200 shadow-xl"
        placeholder="Entery your note here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      {/* colors and buttons */}
      <div className="w-5/6 h-20 flex justify-between items-center bg-slate-200 shadow-xl px-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex justify-center items-center w-8 h-8 rounded-full text-white bg-pink-500"
            onClick={() => dispatch(changeNoteActiveColor("pink"))}
          >
            {activeColor === "pink" && <BsCheckLg size={20} />}
          </button>
          <button
            type="button"
            className="flex justify-center items-center w-8 h-8 rounded-full text-white bg-purple-500"
            onClick={() => dispatch(changeNoteActiveColor("purple"))}
          >
            {activeColor === "purple" && <BsCheckLg size={20} />}
          </button>
          <button
            type="button"
            className="flex justify-center items-center w-8 h-8 rounded-full text-white bg-yellow-500"
            onClick={() => dispatch(changeNoteActiveColor("yellow"))}
          >
            {activeColor === "yellow" && <BsCheckLg size={20} />}
          </button>
          <button
            type="button"
            className="flex justify-center items-center w-8 h-8 rounded-full text-white bg-blue-500"
            onClick={() => dispatch(changeNoteActiveColor("blue"))}
          >
            {activeColor === "blue" && <BsCheckLg size={20} />}
          </button>
          <button
            type="button"
            className="flex justify-center items-center w-8 h-8 rounded-full text-white bg-green-500"
            onClick={() => dispatch(changeNoteActiveColor("green"))}
          >
            {activeColor === "green" && <BsCheckLg size={20} />}
          </button>
        </div>
        <button
          type="submit"
          className="px-10 py-2 bg-green-700 rounded-full text-white"
        >
          + Add Note
        </button>
      </div>
    </form>
  );
};

export default Form;
