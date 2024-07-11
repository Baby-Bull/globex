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

const SignInPage = () => {
  return (
    <div>
      <div className="loginpage container justify-center grid mt-[100px]">
        <LoginUpperZone
          strongMessage={'Welcome back to Globex!'}
          lightMessage={'Sign to continue'}
        />
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
        <div className="login-button mt-6">
          <button className="text-white bg-corporate w-full h-[52px] text-center rounded-[5px] text-[18px]">
            Login
          </button>
        </div>
        <LoginOtherMethodZone
          leftMessage="Don't have a account?"
          redirectMessage="Register"
        />
      </div>
    </div>
  );
};

export default SignInPage;
