// import * as React from 'react';
// import { BaseComponent, divProperties, getNativeProps, customizable } from '../../Utilities';
// import { classNamesFunction } from '../../Utilities';
// import { IPanelProps, IPanelStyleProps, IPanelStyles } from './Panel.types';

// const getClassNames = classNamesFunction<IPanelStyleProps, IPanelStyles>();
// @customizable('Panel', ['styles'])
// export class PanelBase extends BaseComponent<IPanelProps, {}> {
//   public render(): JSX.Element {
//     const { as: RootType = 'label', children, className, styles } = this.props;
//     const classNames = getClassNames(styles, {
//       className
//     });
//     return (
//       <RootType {...getNativeProps(this.props, divProperties)} className={classNames.root}>
//         {children}
//       </RootType>
//     );
//   }
// }
