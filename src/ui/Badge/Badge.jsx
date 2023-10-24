import s from "./Badge.module.scss";

const colorClasses = {
  secondary: s.secondary,
  error: s.error,
  info: s.info,
  alert: s.alert,
};

const sizeClasses = {
  s: s.small,
  m: s.medium,
  l: s.large,
};

export const Badge = ({
  children,
  color = "secondary",
  size = "s",
  className,
  isHidden = false,
}) => {
  if (isHidden) {
    return null;
  }

  const rootClassName = [
    s.badge,
    colorClasses[color],
    sizeClasses[size],
    className,
  ];

  return <span className={rootClassName.join(" ")}>{children}</span>;
};
