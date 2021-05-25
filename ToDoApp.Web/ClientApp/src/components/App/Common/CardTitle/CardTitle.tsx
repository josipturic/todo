import React from "react";
import styles from "./styles.module.scss";

interface IProps {
  title?: string;
  subtitle?: string;
}

const CardHeader: React.FC<IProps> = (props: IProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.elements}>
        <h4 className={styles.title}>{props.title}</h4>
        <p className={styles.subtitle}>{props.subtitle}</p>
      </div>
    </div>
  );
};

export default CardHeader;
