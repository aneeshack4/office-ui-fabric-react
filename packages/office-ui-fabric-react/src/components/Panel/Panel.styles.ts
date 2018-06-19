import { IPanelStyles, IPanelStyleProps, PanelType } from './Panel.types';
import { IStyleFunction } from '../../Utilities';
import { IStyle, ScreenWidthMinMedium } from '../../Styling';

export const getStyles: IStyleFunction<IPanelStyleProps, IPanelStyles> = props => {
  const { type, className } = props;
  return {
    root: [
      'ms-Panel',
      {
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      type === PanelType.largeFixed && {
        selectors: {
          [`@media (min-width: ${ScreenWidthMinMedium})`]: {
            width: '$Panel-width-sm'
          }
        }
      },
      className
    ],
    overlay: [
      // Overlay used within panel
      'overlay',
      {
        pointerEvents: 'none',
        opacity: 1,
        cursor: 'pointer',
        transition: 'opacity $ms-animation-duration-3 $ms-animation-ease-1'
      }
    ],
    isSmall: [
      'ms-Panel--sm',
      {
        width: '$Panel-width-xs',

        [`@media (min-width: $ms-screen-min-md)`]: {
          width: '$Panel-width-sm'
        }
      }
    ],
    isSmallLeft: [
      // Overlay used within panel
      'ms-Panel--smLeft',
      {
        right: 'auto',
        width: '$Panel-width-xs',
        dropShadow: '(30px, 0px, 30px, -30px, .2)'
      }
    ],
    isSmallFluid: [
      // Overlay used within panel
      'ms-Panel--smFluid',
      {
        width: '100%'
      }
    ],
    // two definitions of these 4 below in Panel.scss??
    // isMedium: [
    //   'ms-Panel--md',
    //   {
    //     [`@media (min-width: $uhf-screen-min-mobile)`]: {
    //       left: '$Panel-margin-md',
    //       width: 'auto'
    //     }
    //   }
    // ],
    // isLarge: [
    //   'ms-Panel--lg',
    //   {
    //     [`@media (min-width: $uhf-screen-min-mobile)`]: {
    //       left: '$Panel-margin-md',
    //       width: 'auto'
    //     }
    //   }
    // ],
    // isXLarge: [
    //   'ms-Panel--xl',
    //   {
    //     [`@media (min-width: $uhf-screen-min-mobile)`]: {
    //       left: '$Panel-margin-md',
    //       width: 'auto'
    //     }
    //   }
    // ],
    // isCustom: [
    //   'ms-Panel--custom',
    //   {
    //     [`@media (min-width: $uhf-screen-min-mobile)`]: {
    //       left: '$Panel-margin-md',
    //       width: 'auto'
    //     }
    //   }
    // ],
    isMedium: [
      'ms-Panel--md',
      {
        [`@media (min-width: $ms-screen-min-xl)`]: {
          left: 'auto',
          width: '$Panel-width-md'
        }
      }
    ],
    isLarge: [
      'ms-Panel--lg',
      {
        [`@media (min-width: $ms-screen-min-xxl)`]: {
          left: '$Panel-margin-lg'
        }
      }
    ],
    rootIsOpen: [
      'is-open',
      {
        pointerEvents: 'auto',
        cursor: 'pointer',
        opacity: 0
      }
    ]
    // rootNavigation: [
    //   'ms-Panel-navigation',
    //   {
    //     padding: '0 5px',
    //     height: ${CommandBarHeight},
    //     display: 'flex',
    //     justifyContent: 'flex-end'
    //   }
    // ]
  };
};
