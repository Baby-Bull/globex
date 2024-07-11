import { ReactElement } from 'react';

type IInputIcon = {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  children: ReactElement;
};

const InputIcon = ({ id, name, type, placeholder, children }: IInputIcon) => {
  return (
    <div className="relative mt-2 shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-500 sm:text-sm">{children}</span>
      </div>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="block text-[14px] w-[343px] h-[48px] rounded-[5px] border-0 py-1.5 pl-10 pr-[50px] text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
};

export default InputIcon;
