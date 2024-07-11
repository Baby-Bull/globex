type IErrorMessage = {
  message: string;
};

const ErrorMessage = ({ message }: IErrorMessage) => {
  return (
    <div className="exception-message absolute -mt-7 text-[12px] font-bold text-red-40 w-full text-center">
      <p className="message">{message}</p>
    </div>
  );
};

export default ErrorMessage;
