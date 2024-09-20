import { Component } from "react";
import Person from "./Persons/Person";

class TestProps extends Component {
  render() {
    return (
      <div>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Sachin" age="28"></Person>
        <Person name="Manu" age="29">
          My Hobbies: Racing
        </Person>
        <Person name="Kaalu" age="92" />
      </div>
    );
  }
}

export default TestProps;
