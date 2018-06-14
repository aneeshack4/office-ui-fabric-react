import { IPanelProps, IPanelStyles } from './Panel.types';

export const getStyles = (props: IPanelStyleProps): IPanelStyles => {
  const { theme, size, className } = props;
  const { palette } = theme;

  return {
    root: ['ms-Panel', {}, className],
    child1: [],
    child2: []
    // etc
  };
};
