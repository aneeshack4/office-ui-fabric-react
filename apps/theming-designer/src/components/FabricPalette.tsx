import * as React from 'react';
import { FabricSlots, IThemeRules } from 'office-ui-fabric-react/lib/ThemeGenerator';
import { MainPanelInnerContent } from '../shared/MainPanelStyles';
import { mergeStyles } from '@uifabric/merge-styles';
import { Text } from 'office-ui-fabric-react';
import { IColor } from 'office-ui-fabric-react/lib/Color';
import { FabricSlotWidget } from './FabricSlotWidget';
import { DirectionalHint } from 'office-ui-fabric-react/lib/Callout';

export interface IFabricPaletteProps {
  themeRules?: IThemeRules;
  onFabricPaletteColorChange: (newColor: IColor | undefined, fabricSlot: FabricSlots) => void;
}

const tableClassName = mergeStyles({
  width: '100%',
  selectors: {
    thead: {
      textAlign: 'center'
    },
    tr: {
      padding: 80,
      textAlign: 'left'
    },
    th: {
      display: 'table-cell'
    },
    td: {
      padding: 10,
      textAlign: 'left',
      display: 'table-cell'
    }
  }
});

export class FabricPalette extends React.Component<IFabricPaletteProps, {}> {
  constructor(props: IFabricPaletteProps) {
    super(props);
  }

  public render() {
    return (
      <div className={MainPanelInnerContent}>
        <table className={tableClassName}>
          <thead>
            <tr>
              <Text as="th"> Primary</Text>
              <Text as="th"> Foreground</Text>
              <Text as="th"> Background</Text>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.themeDarker}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.black}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.topCenter}
                />
              </Text>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.neutralTertiaryAlt}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.topCenter}
                />
              </Text>
            </tr>
            <tr>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.themeDark}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.neutralDark}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.neutralQuaternary}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
            </tr>
            <tr>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.themeDarkAlt}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.neutralPrimary}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.neutralQuaternaryAlt}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
            </tr>
            <tr>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.themePrimary}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.neutralPrimaryAlt}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.neutralLight}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
            </tr>
            <tr>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.themeSecondary}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.neutralSecondary}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.neutralLighter}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
            </tr>
            <tr>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.themeTertiary}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.neutralTertiary}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.neutralLighterAlt}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
            </tr>
            <tr>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.themeLight}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.white}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
            </tr>
            <tr>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.themeLighter}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
            </tr>
            <tr>
              <Text as="td">
                <FabricSlotWidget
                  themeRules={this.props.themeRules!}
                  slot={FabricSlots.themeLighterAlt}
                  onFabricPaletteColorChange={this.props.onFabricPaletteColorChange}
                  directionalHint={DirectionalHint.leftCenter}
                />
              </Text>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
