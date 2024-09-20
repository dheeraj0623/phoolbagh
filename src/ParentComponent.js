import React from "react";

import ChildComponent from "./ChildComponent";

function ParentComponent() {
  return (
    <div>
      <h1>This is the Parent Component</h1>
      {/* Passing props to the ChildComponent */}
      <ChildComponent greeting="Hello" name="Sachin" />

      <ChildComponent greeting="Hi" name="Manu" />
    </div>
  );
}

export default ParentComponent;
