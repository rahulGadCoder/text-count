import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import NavBar from "./components/Navbar";
import Textform from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = `#042743`;
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = `white`;
      showAlert("Light mode has been enabled", "success")
    }
  };


  return (
    <>
      <Router>
        <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textform heading="Enter text to analyze" showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router>

      {/* <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <About />
        <Textform heading="Enter text to analyze" showAlert={showAlert} mode={mode} />
      </div> */}
    </>
  );
}

export default App;
