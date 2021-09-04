import React from "react";

function Nav() {

  return (
    <nav className="board-nav">
      <div className="left-nav">
        <select className="board-selector">
          <option>Board1</option>
          <option selected>Board X</option>
          <option>Board3 this will be</option>
        </select>
      </div>
      <div className="righ-nav">
        <button>Add</button>
      </div>
    </nav>
  )
}

export default Nav;
