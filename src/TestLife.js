import React from "react";

class TestLife extends React.Component {
  constructor() {
    super();
    console.log("constructor Called");
    this.state = { hello: "World!" };
  }

  componentWillMount() {
    console.log("componentWillMount()");
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  changeState() {
    this.setState({ hello: "Gwalior" });
  }

  render() {
    console.log("render called");
    return (
      <div>
        <h1>Hello{this.state.hello}</h1>
        <h2>
          <a onClick={this.changeState.bind(this)}>Press Here!</a>
        </h2>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate()");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
}

export default TestLife;
