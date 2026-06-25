import React from "react";

const User = (props) => {
  //   const user = {
  //     name: "jayant",
  //     degree: "BCA",
  //   };
  console.log(props);
  return (
    <div>
      <h1>Hey my name is {props.name}</h1>
    </div>
  );
};

export default User;
