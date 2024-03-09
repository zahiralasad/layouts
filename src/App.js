import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
// import Contact from "./components/Contacts";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import PicnicRegistrationForm from "./components/PicnicRegistrationForm";
import Test from './components/Test'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <Sidebar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} /> 
              <Route path="/picnicregistrationform" element={<PicnicRegistrationForm />} /> 
              <Route path="/test" element={<Test />} /> 
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
   
  )}

export default App;
