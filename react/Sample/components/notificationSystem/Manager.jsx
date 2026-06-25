import Message from "./Message";

const Manager = () => {
  return (
    <div>
      <Message type="error" message="This is an error" />
      <Message type="success" message="This is an successful attempt" />
    </div>
  );
};

export default Manager;
