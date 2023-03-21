import Header from "./components/Header";
import NoteList from "./components/NoteList";
import Form from "./components/Form";

function App() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[940px] h-[400px] flex flex-col justify-center items-center">
        {/* header and search input */}
        <Header />
        {/* textarea, colors and add button */}
        <Form />
        {/* note list */}
        <NoteList />
      </div>
    </div>
  );
}

export default App;
