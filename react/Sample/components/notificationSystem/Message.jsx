const Message = ({ type, message }) => {
  if (type === "error") {
    return <p style={{ color: "red" }}>{message}</p>;
  } else {
    return <p style={{ color: "green" }}>{message}</p>;
  }
};

export default Message;
