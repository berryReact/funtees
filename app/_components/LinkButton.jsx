import Link from "next/link";

function LinkButton({
  children,
  href,
  variant = "primary",
  size = "medium",
  text = "nrm",
  corner = "none",
  border = "none",
  shadow = "none",
}) {
  const variants = {
    primary:
      "bg-primary-300 text-primary-100 font-semibold text-brand-steel tracking-wide  ",
    secondary:
      "bg-secondary-300 text-secondary-100 tracking-wide font-semibold ",
  };

  const sizes = {
    xsmall: "px-[.3rem] py-[.1rem]",
    small: "px-2 py-1",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-xl",
  };

  const textSize = {
    sm: "text-xs",
    med: "text-sm",
    nrm: "text-base",
    lg: "text-lg",
    xlg: "text-xl",
  };

  const corners = {
    xsm: "rounded-xs",
    sm: "rounded-sm",
    med: "rounded-md",
    lg: "rounded-lg",
    xlg: "rounded-xl",
    xxlg: "rounded-2xl",
  };

  const borderColor = {
    none: "border-transparent",
    primary: "border border-primary-300",
    secondary: "border border-secondary-200",
    accent: "border border-primary-900",
  };
  return (
    <Link
      className={`self-center ${borderColor[border]} ${corners[corner]} ${textSize[text]} ${variants[variant]} ${sizes[size]} transition-all duration-200`}
      href={href}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
