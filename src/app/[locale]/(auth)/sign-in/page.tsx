import React from 'react';

/**
 * import components
 */
import LogoBrand from '@/components/atoms/icons/LogoBrand';

const SignInPage = () => {
  return (
    <div>
      <div className="container justify-center grid mt-[171px]">
        <div className="login-logo justify-center grid ">
          <LogoBrand />
        </div>
        <div className="login-messsage text-center">
          <div className="strong-message mt-[25px] text-[18px] font-bold">
            <p>Welcome back to Globex!</p>
          </div>
          <div className="notice-message">
            <p>Sign to continue</p>
          </div>
        </div>
        <div className="input-area"></div>
      </div>
    </div>
  );
};

export default SignInPage;
