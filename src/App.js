import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343838";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success");
    }
  }
    
  return (
 <>
<Router>
        <NavBar
          title="TextUtils"
          aboutText="About Text Editor"
          mode={mode}
          toggleMode={toggleMode} 
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
  <About/>
           </Route>
           <Route exact path="/">
            <TextForm
                showAlert={showAlert}
                heading="Enter Your Text Below"
                mode={mode}
                />
                </Route>
                </Switch>
         </div>
         </Router>
   </>
  );
}


