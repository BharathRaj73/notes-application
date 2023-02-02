import CreateNote from "./pages/CreateNote";
import Notes from "./pages/Notes";
import EditNote from "./pages/EditNote";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Noteitem from "./components/Noteitem";
// import dummyNotes from "./dummy_notes";

import { useEffect, useState } from "react";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes notes={notes} />} />
            <Route
              path="/create-note"
              element={<CreateNote setNotes={setNotes} />}
            />
            <Route
              path="/edit-note/:id"
              element={<EditNote notes={notes} setNotes={setNotes} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
};

export default App;
