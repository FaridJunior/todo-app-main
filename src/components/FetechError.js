import React from "react";

const FetechError = ({ errorMessage, onRetry }) => {
  return (
    <div>
      <p>{errorMessage}</p>
      <button onClick={onRetry}>Retry </button>
    </div>
  );
};

export default FetechError;
