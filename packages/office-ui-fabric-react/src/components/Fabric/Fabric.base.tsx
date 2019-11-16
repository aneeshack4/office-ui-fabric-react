import * as React from 'react';
import { getNativeProps, on, divProperties, classNamesFunction, getWindow, getDocument, isDirectionalKeyCode } from '../../Utilities';
import { getStyles } from './Fabric.styles';
import { IFabricProps, IFabricStyleProps, IFabricStyles } from './Fabric.types';
import { IProcessedStyleSet } from '@uifabric/merge-styles';

const getClassNames = classNamesFunction<IFabricStyleProps, IFabricStyles>();

export class FabricBase extends React.Component<
  IFabricProps,
  {
    isFocusVisible: boolean;
  }
> {
  private _rootElement = React.createRef<HTMLDivElement>();
  private _disposables: (() => void)[] = [];

  constructor(props: IFabricProps) {
    super(props);
    this.state = { isFocusVisible: false };
  }

  public render() {
    const classNames = this._getClassNamesHelper();

    const divProps = getNativeProps<React.HTMLAttributes<HTMLDivElement>>(this.props, divProperties);

    return <div {...divProps} className={classNames.root} ref={this._rootElement} />;
  }

  public componentDidMount(): void {
    const win = getWindow(this._rootElement.current);

    if (win) {
      this._disposables.push(on(win, 'mousedown', this._onMouseDown, true), on(win, 'keydown', this._onKeyDown, true));
    }

    const classNames = this._getClassNamesHelper();
    if (this.props.applyThemeToBody) {
      const currentDoc = getDocument(this._rootElement.current);
      if (currentDoc) {
        currentDoc.body.classList.add(classNames.bodyThemed);
      }
    }
  }

  public componentWillUnmount(): void {
    this._disposables.forEach((dispose: () => void) => dispose());

    const classNames = this._getClassNamesHelper();
    const currentDoc: Document = getDocument(this._rootElement.current)!;
    if (currentDoc) {
      currentDoc.body.classList.remove(classNames.bodyThemed);
    }
  }

  private _getClassNamesHelper(): IProcessedStyleSet<IFabricStyles> {
    const { className, theme, applyTheme, applyThemeToBody } = this.props;
    const classNames = getClassNames(getStyles, {
      theme: theme!,
      applyTheme: applyTheme,
      applyThemeToBody: applyThemeToBody,
      className,
      isFocusVisible: this.state.isFocusVisible
    });
    return classNames;
  }

  private _onMouseDown = (ev: MouseEvent): void => {
    this.setState({ isFocusVisible: false });
  };

  private _onKeyDown = (ev: KeyboardEvent): void => {
    if (isDirectionalKeyCode(ev.which)) {
      this.setState({ isFocusVisible: true });
    }
  };
}
