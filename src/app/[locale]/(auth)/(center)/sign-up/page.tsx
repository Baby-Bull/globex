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
import EmailIcon from '@/components/atoms/icons/EmailIcon';

const SignUpPage = () => {
  return (
    <div>
      <AccountTemplate
        strongMessage="Welcome to Globex!"
        lightMessage="Let's make your account"
        leftMessage="Already have an account?"
        redirectMessage="Login"
        buttonTitle="Register"
      >
        <div className="relative input-area mt-10">
          <ErrorMessage message="Incorrect Password!" />
          <InputIcon
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            children={<UserIcon />}
          />
          <InputIcon
            id="email"
            name="email"
            type="text"
            placeholder="Your Email / Phone Number"
            children={<EmailIcon />}
          />
          <InputIcon
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            children={<PasswordIcon />}
          />
          <InputIcon
            id="confirm-password"
            name="confirm-password"
            type="password"
            placeholder="Confirm Password"
            children={<PasswordIcon />}
          />
        </div>
      </AccountTemplate>
    </div>
  );
};

export default SignUpPage;
