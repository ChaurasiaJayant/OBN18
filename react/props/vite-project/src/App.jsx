import { useState } from "react";
import UserCard from "./components/UserCard";
import AlertButton from "./components/AlertButton";

function App() {
  const onAlert = (text) => {
    alert(text);
  };
  return (
    <>
      <UserCard name="Aman" place="Ghaziabad" />
      <UserCard name="Anshu" place="Delhi" />

      <br />
      <br />
      <br />
      <br />

      <AlertButton onAlert={onAlert} />
    </>
  );
}

export default App;
