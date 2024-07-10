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
          <div className="strong-message mt-[25px] text-[18px] font-bold text-corporate">
            <p>Welcome back to Globex!</p>
          </div>
          <div className="notice-message text-[18px] text-gray-40">
            <p>Sign to continue</p>
          </div>
        </div>
        <div className="input-area mt-10">
          <div className="relative mt-2 shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              id="price"
              name="price"
              type="text"
              placeholder="Your Email / Phone Number"
              className="block text-[14px] w-full rounded-[5px] border-0 py-1.5 pl-10 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
