import React from "react";

function NoResult() {
  return (
    <div className="NoResult">
      <h1>Oops! Try again.</h1>
      <p>
        The Pokemon you're looking for is a unicorn. It doesn't exist in this
        list.
      </p>
      <img src="noResultPic.png" alt="pikachu"></img>
    </div>
  );
}

export default NoResult;
