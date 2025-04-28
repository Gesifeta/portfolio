const ErrorMessage = ({ error, message }) => {
  return (
    <div>
      Oops! {message},<p style={{ color: "red" }}>{error}</p> occurred
    </div>
  );
};

export default ErrorMessage;
