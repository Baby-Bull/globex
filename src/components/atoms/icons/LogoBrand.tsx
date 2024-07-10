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

const LogoBrand: FC<Props> = ({
  width = 72,
  height = 72,
  color = COLORS.white,
  viewBox = '0 0 72 72',
  style = {},
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      cursor: 'pointer',
      ...style,
    }}
  >
    <rect width={width} height={height} rx="16" fill="#002482" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50.8284 33.1716C52.3905 34.7337 52.3905 37.2663 50.8284 38.8284L38.8284 50.8284C37.2663 52.3905 34.7337 52.3905 33.1716 50.8284L21.1716 38.8284C19.6095 37.2663 19.6095 34.7337 21.1716 33.1716L33.1716 21.1716C34.7337 19.6095 37.2663 19.6095 38.8284 21.1716L50.8284 33.1716ZM36 29.6569L29.6569 36L36 42.3431L42.3431 36L36 29.6569Z"
      fill={color}
    />
  </svg>
);

export default LogoBrand;
