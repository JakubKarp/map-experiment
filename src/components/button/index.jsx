export const Button = ({ buttonCallback, buttonText, disabled }) => {
  return (
    <button onClick={buttonCallback} className="button" disabled={disabled}>
      {buttonText}
    </button>
  );
};
