import React from "react";
import styles from "./styles.module.scss";

interface IProps {
  name: string;
}

const ComponentName: React.FC<IProps> = (props: IProps) => {
  return <div className={styles.name}>{props.name}</div>;
};

export default ComponentName;
