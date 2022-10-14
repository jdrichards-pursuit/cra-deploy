import Contact from "./Components/Contact";

import "./App.css";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <h1>Pursuit App Template</h1>
      <h2>My new update</h2>
      <h3>Making changes on jd-first-branch</h3>
      <Contact />
    </div>
  );
}

export default App;
