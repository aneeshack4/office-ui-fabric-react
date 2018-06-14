import * as React from 'react';
import {
  classNamesFunction,
  customizable,
} from '../../Utilities';
import { IPanelProps } from './Panel.types';

const getClassNames = classNameFunction<IPanelStyleProps, IPanelStyles>();

/**
 * Panel with no default styles.
 * [Use the `getStyles` API to add your own styles.](https://github.com/OfficeDev/office-ui-fabric-react/wiki/Styling)
 */
@customizable('Panel', ['theme'])
export class ComponentName extends React.Component<...> {
  public render() {
    const {
      className,
      getStyles,
      theme,
    } = this.props;
    const classNames = getClassNames(getStyles, {
      theme: theme!,
      className,
      // Other props from IPanelStyleProps
    });

    return (
      <div className={ classNames.root }>Hello</div>;
    );
  }
}