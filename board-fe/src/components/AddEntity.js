import React from "react";


function AddEntity() {

  const entityHandler = e => null;
  // usually will display a form for us.

  return (
    <div class="dropdown">
      <button class="dropbtn">Add</button>
      <div id="myDropdown" class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div> 
  );
}

export default AddEntity;
