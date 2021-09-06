import React from "react";
export function ChildCounter({
  childCount,
  incrementChildHandler
}) {
  return <div>
    <p>Number of children: {childCount}</p>
    <button onClick={incrementChildHandler}>Add Child</button>
  </div>;
}
