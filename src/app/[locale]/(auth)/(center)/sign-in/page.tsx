import React from 'react';

import Image from 'next/image';
// import Image from 'public/assets/Facebook.png';
/**
 * import components
 */
import UserIcon from '@/components/atoms/icons/UserIcon';
import PasswordIcon from '@/components/atoms/icons/PasswordIcon';
import OrLineSVG from '@/components/atoms/icons/OrLineSVG';
import ErrorMessage from '@/components/atoms/ErrorMessage';
import InputIcon from '@/components/atoms/InputIcon';
import LoginUpperZone from '@/components/molecules/LoginUpperZone';
import LoginOtherMethodZone from '@/components/molecules/LoginOtherMethodZone';
import AccountTemplate from '@/components/templates/AccountTemplate';

const SignInPage = () => {
  return (
    <div>
      <AccountTemplate
        strongMessage="Welcome back to Globex!"
        lightMessage="Sign to continue"
        leftMessage="Don't have a account?"
        redirectMessage="Register"
        buttonTitle="Login"
      >
        <div className="relative input-area mt-10">
          <ErrorMessage message="Incorrect Password!" />
          <InputIcon
            id="username"
            name="username"
            type="text"
            placeholder="Your Email / Phone Number"
            children={<UserIcon />}
          />
          <InputIcon
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            children={<PasswordIcon />}
          />
        </div>
        <div className="forgot-password-area text-end mt-2">
          <p className="forgot-text text-[12px] font-bold text-corporate">
            Forgot Password?
          </p>
        </div>
        <div className="remember-me-area flex items-center">
          <input
            className="rounded-[2px] w-[15px] h-[15px] border-gray-20"
            type="checkbox"
            id="remember"
            name="remember"
          />
          <label className="ml-2 text-[14px] text-gray-40" htmlFor="remember">
            Remember Me
          </label>
        </div>
      </AccountTemplate>
    </div>
  );
};

export default SignInPage;
