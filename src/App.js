import "./App.css";
import Addtask from "./components/Addtask";
import Listtask from "./components/ListTask";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { Route, Switch, Router } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/addtask" component={Addtask} />
        <Route exact path="/listtasks" component={Listtask} />
        <Route exact path="/filter" component={Filter} />
      </Switch>
    </div>
  );
}

export default App;
