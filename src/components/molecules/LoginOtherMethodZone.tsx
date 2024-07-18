import Image from 'next/image';
import OrLineSVG from '../atoms/icons/OrLineSVG';

type ILoginOtherMethodZone = {
  leftMessage: string;
  redirectMessage: string;
};

const LoginOtherMethodZone = ({
  leftMessage,
  redirectMessage,
}: ILoginOtherMethodZone) => {
  return (
    <div>
      <div className="or-line mt-8">
        <OrLineSVG />
      </div>
      <div className="login-other text-center mt-8 grid justify-center">
        <div className="text-login-other text-[15px]">Login using</div>
        <div className="logo-login-other w-[186px] justify-between flex items-center mt-5">
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
      <div className="other-redirect text-[12px] flex justify-center mt-20">
        <div className="message-1 text-gray-40">{leftMessage}</div>
        <div className="link-redirect font-bold text-corporate ml-1">
          {redirectMessage}
        </div>
      </div>
    </div>
  );
};

export default LoginOtherMethodZone;
