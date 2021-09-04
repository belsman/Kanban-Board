import React, { useEffect } from "react";

function AddEntity() {
  const entityHandler = ({ target }) => target.nextSibling.classList.toggle('show');

  const closeEntity = () => {
    const dropDownContent = document.querySelector('.dropdown-content');
    if (dropDownContent.classList.contains('show')) {
      dropDownContent.classList.remove('show');
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', e => {
      if (!e.target.matches('.dropbtn')) {
        closeEntity();
      }
    })

    return () => {
      document.body.removeEventListener("click", closeEntity);
    }
  });

  return (
    <div class="dropdown">
      <button onClick={entityHandler} class="dropbtn">Add</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div> 
  );
}

export default AddEntity;
