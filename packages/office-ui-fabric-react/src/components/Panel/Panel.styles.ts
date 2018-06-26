import { IPanelStyles, IPanelStyleProps, PanelType } from './Panel.types';
import { IStyleFunction } from '../../Utilities';
//import { ScreenWidthMinMedium, AnimationClassNames } from '../../Styling';

// Panel styles

// $Panel-width-xs: 272px;
// $Panel-width-sm: 340px;
// $Panel-width-md: 643px;
// $Panel-width-lg: 940px;
// $Panel-margin-md: 48px;
// $Panel-margin-lg: 428px;
// $Panel-margin-xl: 176px;
// $CommandBarHeight: 44px;

export const getStyles: IStyleFunction<IPanelStyleProps, IPanelStyles> = props => {
  const { type, className, isOpen, smallFluid } = props;
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
      // type === PanelType.largeFixed && {
      //   selectors: {
      //     [`@media (min-width: ${ScreenWidthMinMedium})`]: {
      //       width: '$Panel-width-sm'
      //     }
      //   }
      // },
      className,
      isOpen && [
        'is-open',
        {
          pointerEvents: 'auto',
          cursor: 'pointer',
          opacity: 0
        }
      ],
      smallFluid && ['ms-Panel--smFluid', {}]
    ],
    overlay: [
      // Overlay used within panel
      'overlay',
      {
        opacity: 1,
        cursor: 'pointer',
        transition: 'opacity $ms-animation-duration-3 $ms-animation-ease-1'
      },
      isOpen
        ? {
            pointerEvents: 'auto',
            selectors: {
              [`@media screen and (-ms-high-contrast: active)`]: {
                opacity: 0
              }
            }
          }
        : { pointerEvents: 'none' }
      //isOpen && isAnimating && AnimationClassNames.fadeIn200
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
    ],
    rootNavigation: [
      'ms-Panel-navigation',
      {
        padding: '0 5px',
        //height: ${CommandBarHeight},
        display: 'flex',
        justifyContent: 'flex-end'
      }
    ],
    rootContentInner: [
      'ms-Panel-contentInner',
      {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflowY: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        webkitOverflowScrolling: 'touch'
        //transform: translateZ(0);
      }
    ],
    rootHasCloseButton: [
      'ms-Panel--hasCloseButton',
      {
        //top: $CommandBarHeight
      }
    ],
    rootHeader: [
      'ms-Panel-header',
      {
        margin: '14px 0',
        // Ensure that title doesn't shrink if screen is too small
        flexGrow: 0,
        [`@media (min-width: $ms-screen-min-xl)`]: {
          marginTop: '30px'
        }
      }
    ],
    rootFooter: [
      'ms-Panel-footer',
      {
        flexGrow: 0,
        borderTop: '1px solid transparent',
        transition: 'border $ms-animation-duration-3 $ms-animation-ease-2'
      }
    ],
    rootContent: [
      'ms-Panel-content',
      {
        marginBottom: 0,
        paddingBottom: '20px',
        overflowY: 'auto'
      }
    ],
    // rootContentGrow: [
    //   flexGrow: 1,
    // ]
    rootFootInner: [
      'ms-Panel-footerInner',
      {
        paddingBottom: '20px',
        paddingTop: '20px'
      }
    ],
    // rootFooterIsSticky: []
    rootHeaderText: [
      'ms-Panel-headerText',
      {
        //@include ms-font-xl;
        color: '$ms-color-neutralPrimary',
        lineHeight: '32px',
        margin: 0
      }
    ]
  };
};
