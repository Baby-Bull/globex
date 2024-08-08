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

const FavoriteIcon: FC<Props> = ({
  width = 31,
  height = 27,
  color = COLORS.gray40,
  viewBox = '0 0 31 27',
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
        d="M3 14C7.82311e-08 10 1 4.00004 6 2.00004C11 4.1008e-05 14 4.00004 15 6.00004C16 4.00004 20 4.1008e-05 25 2.00004C30 4.00004 30 10 27 14C24 18 15 26 15 26C15 26 6 18 3 14Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FavoriteIcon;
