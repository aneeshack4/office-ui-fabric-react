import { IKeytipProps } from '../../Keytip';

export interface IKeytipDataProps {
  /**
   * IKeytipProps to create from this KeytipData
   * If no keytipProps are defined, a keytip won't be registered
   *
   * @type {IKeytipProps}
   */
  keytipProps?: IKeytipProps;

  /**
   * String to add to the aria-describedby generated by this KeytipData
   * It will prepend this string to the generated aria-describedby property
   *
   * @type {string}
   */
  ariaDescribedBy?: string;

  /**
   * T/F if this keytip should be disabled upon creation
   *
   * @type {boolean}
   */
  disabled?: boolean;
}
