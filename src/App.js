import logo from "./logo.svg";
import "./App.css";
//import Home from "./Home";
import { Component } from "react";

//component
class App extends Component {
  state = {
    profile: [
      { name: "oussama", lastname: "soltani", age: "21" },
      { name: "ilyes", lastname: "sdiri", age: "30" },
      { name: "rayen", lastname: "kahlaoui", age: "22" },
      { name: "ons", lastname: "gharbi", age: "24" },
    ],
  };
  render() {
    const data = this.state.profile.map((item) => {
      return (
        <ul>
          <li>{item.name}</li>
          <li>{item.lastname}</li>
          <li>{item.age}</li>
        </ul>
      );
    });
    return (
      <div className="App">
        <h1>Welcome to React Js Course</h1>
        <div>{data}</div>
      </div>
    );
  }
}
//exportiiing brooo

export default App;
