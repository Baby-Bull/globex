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

const ActiveHomeIcon: FC<Props> = ({
  width = 24,
  height = 26,
  color = COLORS.corporate,
  viewBox = '0 0 24 26',
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
        d="M10.07 1.56701C10.6105 1.11279 11.294 0.86377 12 0.86377C12.706 0.86377 13.3895 1.11279 13.93 1.56701L22.93 9.13501C23.265 9.41652 23.5344 9.76791 23.7192 10.1645C23.9041 10.5612 23.9999 10.9934 24 11.431V24.001C24 24.5314 23.7893 25.0402 23.4142 25.4152C23.0391 25.7903 22.5304 26.001 22 26.001H16.5C15.9696 26.001 15.4609 25.7903 15.0858 25.4152C14.7107 25.0402 14.5 24.5314 14.5 24.001V17.001H9.5V24.001C9.5 24.5314 9.28929 25.0402 8.91421 25.4152C8.53914 25.7903 8.03043 26.001 7.5 26.001H2C1.46957 26.001 0.960859 25.7903 0.585786 25.4152C0.210714 25.0402 0 24.5314 0 24.001V11.43C0.00011066 10.9924 0.0959458 10.5602 0.280785 10.1635C0.465624 9.76691 0.734993 9.41552 1.07 9.13401L10.07 1.56601V1.56701Z"
        fill={color}
      />
    </svg>
  );
};

export default ActiveHomeIcon;
