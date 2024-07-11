import React from 'react';
import LogoBrand from '../atoms/icons/LogoBrand';

type ILoginMessage = {
  strongMessage: string;
  lightMessage: string;
};

const LoginUpperZone = ({ strongMessage, lightMessage }: ILoginMessage) => {
  return (
    <div>
      <div className="login-logo justify-center grid ">
        <LogoBrand />
      </div>
      <div className="login-messsage text-center mb-1">
        <div className="strong-message mt-[25px] text-[18px] font-bold text-corporate">
          <p>{strongMessage}</p>
        </div>
        <div className="notice-message text-[18px] text-gray-40">
          <p>{lightMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginUpperZone;
