import React from "react";
import { useSelector } from "react-redux";
import NoteElement from "./NoteElement";

const NoteList = () => {
  const notes = useSelector((state) => state.notes.notes);
  const filterQuery = useSelector((state) => state.notes.filterQuery);

  if (filterQuery) {
    return (
      <div className="mt-10 w-5/6 h-auto grid grid-cols-3 gap-5">
        {notes
          .filter((note, i) => note.note.toLowerCase().includes(filterQuery))
          .map((note, i) => (
            <NoteElement noteElement={note} />
          ))}
      </div>
    );
  }

  return (
    <div className="mt-10 w-5/6 h-auto grid grid-cols-3 gap-5">
      {/* note element */}
      {notes.map((note, i) => (
        <NoteElement noteElement={note} />
      ))}
    </div>
  );
};

export default NoteList;
