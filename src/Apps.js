import React, { Component } from "react";
import Person from "./Persons/Person";
import "./App.css";
import Radium from "radium";

class Apps extends Component {
  state = {
    person: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    showPersons: false,
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  render() {
    const style = {
      backgroundColor: "green",
      border: "2px blue solid",
      color: "white",
      padding: "5px",
      margin: "5px",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
      "@media (max-width: 600px)": {
        backgroundColor: "yellow",
        color: "red",
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.person[0].name}
            age={this.state.person[0].age}
          />
          <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
          />
          <Person
            name={this.state.person[2].name}
            age={this.state.person[2].age}
          />
        </div>
      );

      style.backgroundColor = "blue";
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Swith Name
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(Apps);
