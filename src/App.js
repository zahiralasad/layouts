import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
// import Contact from "./components/Contacts";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/teamentryform" element={<TeamEntryForm/>}/>
         */}

      </Routes>
    </BrowserRouter>
    </div>
  )}

export default App;
