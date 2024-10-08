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

const ActiveBag: FC<Props> = ({
  width = 28,
  height = 32,
  color = COLORS.corporate,
  viewBox = '0 0 28 32',
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
        d={`M14 2C15.3261 2 16.5979 2.52678 17.5355 3.46447C18.4732 4.40215 19 5.67392 19 7V8H9V7C9 5.67392 9.52678 4.40215 10.4645 3.46447C11.4021 2.52678 12.6739 2 14 2ZM21 8V7C21 5.14348 20.2625 3.36301 18.9497 2.05025C17.637 0.737498 15.8565 0 14 0C12.1435 0 10.363 0.737498 9.05025 2.05025C7.7375 3.36301 7 5.14348 7 7V8H0V28C0 29.0609 0.421427 30.0783 1.17157 30.8284C1.92172 31.5786 2.93913 ${height} 4 32H24C25.0609 ${height} 26.0783 31.5786 26.8284 30.8284C27.5786 30.0783 ${width} 29.0609 28 28V8H21Z`}
        fill={color}
      />
    </svg>
  );
};

export default ActiveBag;
