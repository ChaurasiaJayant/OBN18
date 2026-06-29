const AlertButton = ({ onAlert }) => {
  return (
    <>
      <button
        onClick={() => {
          onAlert("Button was clicked");
        }}
      >
        Click me
      </button>
    </>
  );
};

export default AlertButton;
