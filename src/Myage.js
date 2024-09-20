import { Component } from "react";

class Myage extends Component {
  constructor() {
    super();
    this.state = {
      age: 24,
    };
  }

  agehandler = () => {
    this.setState({ age: this.state.age + 1 });
  };

  agehandlerminus = () => {
    this.setState({ age: this.state.age - 1 });
  };

  render() {
    return (
      <div>
        <h1>I am {this.state.age} years old</h1>
        <button onClick={this.agehandler}>Next Year Age</button>

        <button onClick={this.agehandlerminus}>Last Year Age</button>
      </div>
    );
  }
}

export default Myage;
