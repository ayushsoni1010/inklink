type BaseButton = {
  /**
   * @default 'btn'
   */
  /**
   * One or more button variant combinations
   * button may be one of a variety of visual variants such as:
   * `'primary', 'secondary', 'success', 'danger', 'warning', 'info'`
   * as well as "outline" versions (prefixed by 'outline-*')
   * `'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info'`
   */
  variant: "primary" | "secondary" | "tertiary" | "link";
  /**
   * Defines HTML button size.
   *
   * @default 'medium'
   */
  size: "small" | "medium" | "large";
  /**
   * Defines HTML button type attribute.
   *
   * @default 'button'
   */
  type: "button" | "reset" | "submit";
};

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: BaseButton["variant"];
  size: BaseButton["size"];
  type?: BaseButton["type"];
  class?: string;
  value?: string;
  disabled?: boolean;
  children?: React.ReactNode | any;
}
