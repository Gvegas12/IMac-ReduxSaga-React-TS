import React from "react";
import clsx from "clsx";

import styles from "./index.module.scss";
import { Link, Pathname } from "react-router-dom";

interface UIFileIconProps {
  name?: string;
  className?: string;
  onOpen?: () => void;
  href: Pathname;
}

const UIFileIcon: React.FC<UIFileIconProps> = ({
  name,
  href,
  className,
  onOpen,
}) => {
  return (
    <Link to={href}>
      <div className={clsx(styles.folder, className)} onClick={onOpen}>
        <div className="ME-icon-svg" />
        <span className={styles.folderName}>{name}</span>
      </div>
    </Link>
  );
};

export default UIFileIcon;
