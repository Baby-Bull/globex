import React from 'react';
import LoginUpperZone from '../molecules/LoginUpperZone';
import LoginOtherMethodZone from '../molecules/LoginOtherMethodZone';

type AccountTemplateProps = {
  children: React.ReactNode;
  strongMessage: string;
  lightMessage: string;
  // minorMessage?: string;
  leftMessage: string;
  redirectMessage: string;
  buttonTitle: string;
};

const AccountTemplate = ({
  children,
  strongMessage,
  lightMessage,
  // minorMessage,
  leftMessage,
  redirectMessage,
  buttonTitle,
}: AccountTemplateProps) => {
  return (
    <div className="loginpage container justify-center grid mt-[100px]">
      <LoginUpperZone
        strongMessage={strongMessage}
        lightMessage={lightMessage}
      />
      {children}
      <div className="login-button mt-6">
        <button className="text-white bg-corporate w-full h-[52px] text-center rounded-[5px] text-[18px]">
          {buttonTitle}
        </button>
      </div>
      <LoginOtherMethodZone
        leftMessage={leftMessage}
        redirectMessage={buttonTitle}
      />
    </div>
  );
};
export default AccountTemplate;
