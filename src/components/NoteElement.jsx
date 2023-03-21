import React from "react";

const NoteElement = ({ noteElement }) => {
  return (
    <div
      key={noteElement.id}
      className={`w-full min-h-[50px] max-h-full grid place-items-center text-xl font-medium shadow-xl bg-${
        noteElement.color
      }-500 ${noteElement.color || "bg-neutral-800 text-zinc-200"}`}
    >
      {noteElement.note}
    </div>
  );
};

export default NoteElement;
