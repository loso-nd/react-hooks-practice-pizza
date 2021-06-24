import React from "react";

function Pizza({pizza}) {
  
  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{ pizza.vegetarian ? "YES" : "NO"}</td>
      <td>
        <button type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
