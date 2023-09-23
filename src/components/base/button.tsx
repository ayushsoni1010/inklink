import { BaseButtonProps } from "@/interfaces/base/button";

const BaseButtonStyles = "text-center rounded-md font-semibold";

// `'primary', 'secondary', 'tertiary', 'link'`

const BaseButtonVariantStyles = {
  primary:
    "bg-blue-600 hover:bg-blue-700 focus:bg-blue-600 disabled:bg-blue-200 text-white hover:text-white focus:text-white disabled:text-white ring-1 ring-blue-600 hover:ring-blue-700 focus:ring-blue-600 disabled:ring-blue-200",
  secondary:
    "bg-white hover:bg-gray-50 focus:bg-white disabled:bg-white text-gray-700 hover:text-gray-800 focus:text-gray-700 disabled:text-gray-300 ring-1 ring-gray-300 hover:ring-gray-300 focus:ring-gray-300 disabled:ring-gray-200",
  tertiary:
    "bg-transparent hover:bg-blue-50 focus:bg-transparent disabled:bg-transparent text-blue-700 hover:text-blue-700 focus:text-blue-700 disabled:text-gray-300 ring-1 ring-gray-300 hover:ring-gray-300 focus:ring-gray-300 disabled:ring-gray-200",
  link: "text-blue-700 hover:text-blue-800 focus:text-blue-700 disabled:text-gray-300",
};

const BaseButtonSizeStyles = {
  small: "px-6 py-2.5 text-sm shadow-sm",
  medium: "px-6 py-3 text-md shadow-sm",
  large: "px-6 py-4 text-lg shadow-sm",
};

const BaseButtonLinkSizeStyles = {
  small: "text-sm",
  medium: "text-md",
  large: "text-lg",
};

const BaseButton: React.FunctionComponent<BaseButtonProps> = ({
  variant = "primary",
  size = "medium",
  type = "button",
  disabled = false,
  ...props
}) => {
  const allClassName = `${BaseButtonStyles} ${
    BaseButtonVariantStyles[variant]
  } ${
    variant === "link"
      ? BaseButtonLinkSizeStyles[size]
      : BaseButtonSizeStyles[size]
  } ${props?.class}`;

  return (
    <>
      <button
        type={type}
        className={allClassName}
        style={props?.style}
        disabled={disabled}
        {...props}
      >
        {props?.children}
        {props.value}
      </button>
    </>
  );
};

export { BaseButton };
