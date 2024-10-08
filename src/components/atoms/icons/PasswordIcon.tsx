'use client';

import React, { FC } from 'react';

/**
 * import constants
 */
import { COLORS } from '@/constants/Colors';

/**
 * import types
 */
import { IconProps } from '@/types/iconProps';

type Props = IconProps & {};

const PasswordIcon: FC<Props> = ({
  width = 20,
  height = 20,
  color = COLORS.gray40,
  viewBox = '0 0 20 20',
  style = {},
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 7.75C0 7.19772 0.447715 6.75 1 6.75H19C19.5523 6.75 20 7.19772 20 7.75V19C20 19.5523 19.5523 20 19 20H1C0.447715 20 0 19.5523 0 19V7.75ZM2 8.75V18H18V8.75H2Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2C7.48134 2 5.375 4.13206 5.375 6.841C5.375 7.39328 4.92728 7.841 4.375 7.841C3.82272 7.841 3.375 7.39328 3.375 6.841C3.375 3.09919 6.30641 0 10 0C13.6936 0 16.625 3.09919 16.625 6.841C16.625 7.39328 16.1773 7.841 15.625 7.841C15.0727 7.841 14.625 7.39328 14.625 6.841C14.625 4.13206 12.5187 2 10 2Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 11.7257C10.5523 11.7257 11 12.1734 11 12.7257V13.8507C11 14.403 10.5523 14.8507 10 14.8507C9.44772 14.8507 9 14.403 9 13.8507V12.7257C9 12.1734 9.44772 11.7257 10 11.7257Z"
      fill={color}
    />
  </svg>
);

export default PasswordIcon;
