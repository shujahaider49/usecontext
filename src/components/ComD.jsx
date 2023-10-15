import React, { useContext } from "react";
import { FirstName } from "../App";

const ComD = () => {
  const { fname, sname, tname,bool } = useContext(FirstName);

  return (
    <div>
      This is Com D
      <details>
        <summary>Student Names</summary>
        <ul> 1. {fname} </ul>
        <ul> 2. {sname} </ul>
        <ul> 3. {tname} </ul>
      </details>
    </div>
  );
};

export default ComD;
