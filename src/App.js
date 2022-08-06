import "./App.css";
import { useState } from "react";
import { Dashboard } from "./Components/Dashboard";
import { Signup } from "./Components/Signup";
import Header from "./Components/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header />
      {isLoggedIn ? <Dashboard /> : <Signup loginHandler={setIsLoggedIn}/>}
    </div>
  );
}

export default App;
