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

const EmailIcon: FC<Props> = ({
  width = 20,
  height = 16,
  color = COLORS.gray40,
  viewBox = '0 0 20 16',
  style = {},
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 1.25C0 0.697715 0.447715 0.25 1 0.25H19C19.5523 0.25 20 0.697715 20 1.25V14.75C20 15.3023 19.5523 15.75 19 15.75H1C0.447715 15.75 0 15.3023 0 14.75V1.25ZM2 2.25V13.75H18V2.25H2Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.240755 0.599219C0.600173 0.17989 1.23147 0.131322 1.6508 0.49074L10 7.64706L18.3492 0.49074C18.7686 0.131322 19.3999 0.17989 19.7593 0.599219C20.1187 1.01855 20.0701 1.64985 19.6508 2.00927L10.6508 9.72339C10.2763 10.0444 9.72372 10.0444 9.34923 9.72339L0.349235 2.00927C-0.0700949 1.64985 -0.118663 1.01855 0.240755 0.599219Z"
        fill={color}
      />
    </svg>
  );
};

export default EmailIcon;
