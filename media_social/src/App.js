import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./pages/authentication/Authentication";
import HomePage from "./pages/homepage/HomePage";
import Message from "./pages/message/Message";

function App() {
  return (
    <div className="App">
      {/* <Authentication /> */}
      <Routes>
        {/* <Route path="/*" element={<Authentication />} /> */}
        <Route path="/*" element={<HomePage />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
