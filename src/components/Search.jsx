import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchNote } from "../store/NotesSlice";

const Search = () => {
  const dispatch = useDispatch();
  const filterQuery = useSelector((state) => state.notes.filterQuery);
  console.log(filterQuery);
  return (
    <input
      type="text"
      placeholder="Search..."
      className="w-2/4 h-12 rounded-full px-5 focus:outline-none bg-slate-200 shadow-xl"
      value={filterQuery}
      onChange={(e) => dispatch(searchNote(e.target.value))}
    />
  );
};

export default Search;
