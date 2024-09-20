import React from "react";

// Receiving props in the child component
function ChildComponent({ greeting, name }) {
  return (
    <div>
      <h2>This is the Child Component</h2>
      <p>
        {greeting}, {name}!
      </p>
    </div>
  );
}
export default ChildComponent;
