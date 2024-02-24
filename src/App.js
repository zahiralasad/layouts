import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import Contact from "./components/Contacts";
// import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/teamentryform" element={<TeamEntryForm/>}/>
         */}

      </Routes>
    </BrowserRouter>
  )}

export default App;
