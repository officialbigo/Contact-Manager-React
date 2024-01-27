import React from "react";
import { Link } from "react-router-dom";

const DeleteConfirm = (props) => {
  const id = props.location.state.id;
  return (
    <div className="ui main">
      <h1>gap text . Needs to be fixed </h1>

      <div className="ui card centered">
        <h2>Are you sure you want to delete this contact</h2>
      </div>
      <button
        className="ui button green"
        onClick={() => props.deleteContactHandler(id)}
      >
        Yes
      </button>
      <Link to="/">
        <button classNmae="ui button red">No</button>
      </Link>
    </div>
  );
};

export default DeleteConfirm;
