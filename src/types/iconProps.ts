import { CSSProperties } from 'react';

/**
 * import types
 */
import { Color } from '@/constants/Colors';

export interface IconProps {
  color?: Color;
  height?: number;
  width?: number;
  borderColor?: Color;
  backgroundColor?: Color;
  fillColor?: Color;
  strokeColor?: Color;
  strokeWidth?: number;
  // svg用をあとで作る
  style?: CSSProperties;
  viewBox?: string;
}
