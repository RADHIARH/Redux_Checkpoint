import "./App.css";
import Addtask from "./components/Addtask";
import Listtask from "./components/ListTask";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/addtask" component={Addtask} />
        <Route exact path="/listtasks" component={Listtask} />
      </Switch>
    </div>
  );
}

export default App;
