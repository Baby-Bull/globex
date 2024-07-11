import React from 'react';

import Image from 'next/image';
// import Image from 'public/assets/Facebook.png';
/**
 * import components
 */
import LogoBrand from '@/components/atoms/icons/LogoBrand';
import UserIcon from '@/components/atoms/icons/UserIcon';
import PasswordIcon from '@/components/atoms/icons/PasswordIcon';
import OrLineSVG from '@/components/atoms/icons/OrLineSVG';
import LoginMessage from '@/components/atoms/LoginMessage';

const SignInPage = () => {
  return (
    <div>
      <div className="loginpage container justify-center grid mt-[100px]">
        <div className="login-logo justify-center grid ">
          <LogoBrand />
        </div>
        <LoginMessage
          strongMessage={'Welcome back to Globex!'}
          lightMessage={'Sign to continue'}
        />
        <div className="relative input-area mt-10">
          <div className="exception-message absolute -mt-7 text-[12px] font-bold text-red-40 w-full text-center">
            <p className="message">Incorrect Password!</p>
          </div>
          <div className="relative mt-2 shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">
                <UserIcon />
              </span>
            </div>
            <input
              id="price"
              name="price"
              type="text"
              placeholder="Your Email / Phone Number"
              className="block text-[14px] w-[343px] h-[48px] rounded-[5px] border-0 py-1.5 pl-10 pr-[50px] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="relative mt-2 shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">
                <PasswordIcon />
              </span>
            </div>
            <input
              id="price"
              name="price"
              type="text"
              placeholder="Password"
              className="block text-[14px] w-[343px] h-[48px] rounded-[5px] border-0 py-1.5 pl-10 pr-[50px] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
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
        <div className="or-line mt-8">
          <OrLineSVG />
        </div>
        <div className="login-other text-center mt-8 grid justify-center">
          <div className="text-login-other text-[15px]">Login using</div>
          <div className="logo-login-other w-[186px] justify-between flex items-center mt-4">
            <Image
              src="/assets/Icloud.png"
              alt="Picture of the author"
              width={29}
              height={35}
            />
            <Image
              src="/assets/Facebook.png"
              alt="Picture of the"
              width={35}
              height={35}
            />
            <Image
              src="/assets/Google.png"
              alt="Picture of"
              width={35}
              height={35}
            />
          </div>
        </div>
        <div className="other-redirect text-[12px] flex justify-center mt-10">
          <div className="message-1 text-gray-40">Don't have a account?</div>
          <div className="link-redirect font-bold text-corporate ml-1">
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
