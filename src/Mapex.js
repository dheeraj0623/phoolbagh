import { Component } from "react";

class Mapex extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { pid: 111, pname: "pone", pcost: 10000 },
        { pid: 222, pname: "ptwo", pcost: 20000 },
        { pid: 333, pname: "pthree", pcost: 30000 },
        { pid: 444, pname: "pfour", pcost: 40000 },
      ],
      sub: "ReactJS",
    };
  }

  render() {
    return (
      <>
        <h1>{this.state.sub}</h1>

        {this.state.products.map((element) => (
          <p>
            pid:{element.pid}, pname:{element.pname}, pcost:{element.pcost}
          </p>
        ))}
      </>
    );
  }
}

export default Mapex;
