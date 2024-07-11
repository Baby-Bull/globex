import React from 'react';

const LoginMessage = ({strongMessage, lightMessage}) => {
  return (
    <div className="login-messsage text-center mb-1">
      <div className="strong-message mt-[25px] text-[18px] font-bold text-corporate">
        <p>{strongMessage}</p>
      </div>
      <div className="notice-message text-[18px] text-gray-40">
        <p>{lightMessage}</p>
      </div>
    </div>
  );
};

export default LoginMessage;
