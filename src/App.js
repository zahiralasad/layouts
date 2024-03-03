import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
// import Contact from "./components/Contacts";
import Header from "./components/Header";
import PicnicRegistrationForm from "./components/PicnicRegistrationForm";
import Contacts from "./components/Contacts";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <Sidebar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/picnicregistrationfrom" element={<PicnicRegistrationForm />} />
              <Route path="/contact" element={<Contacts />} />
        
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
   
  )}

export default App;
