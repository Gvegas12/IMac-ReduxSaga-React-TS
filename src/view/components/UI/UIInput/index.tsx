import React from "react";
import clsx from "clsx";

import styles from "./index.module.scss";

interface IUIInput extends React.HTMLProps<HTMLInputElement> {
  fullWidth?: boolean;
}

const UIInput: React.FC<IUIInput> = ({
  type = "text",
  fullWidth,
  className,
  ...props
}) => {
  return (
    <input
      {...props}
      style={{ ...props.style, width: fullWidth ? "100%" : "auto" }}
      className={clsx(styles.input, className)}
      type={type}
    />
  );
};

export default UIInput;
