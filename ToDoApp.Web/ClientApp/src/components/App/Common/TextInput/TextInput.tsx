import React, { ChangeEvent } from "react";
import styles from "./textinput.module.scss";

interface IProps {
  handleChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleBlur?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value: string;
  errors?: any;
  id: string;
  touched?: any;
  label?: string;
  placeholder: string;
  type?: string;
  disabled?: boolean;
  step?: number;
  multiline?: boolean;
  rows?: number;
}

export const TextInput: React.FC<IProps> = (props) => (
  <React.Fragment>
    <label htmlFor="firstName" style={{ display: "block" }}>
      {props.label}
    </label>
    {props.multiline ? (
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
        disabled={props.disabled === true}
        className={
          props.errors[props.id] && props.touched[props.id]
            ? "text-input error"
            : "text-input" + " " + styles.textInput + " " + styles.textArea
        }
        rows={props.rows ? props.rows : 3}
      ></textarea>
    ) : (
      <input
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        type={props.type ? props.type : "text"}
        disabled={props.disabled === true}
        step={props.step}
        className={
          props.errors[props.id] && props.touched[props.id]
            ? "text-input error"
            : "text-input" + " " + styles.textInput
        }
      />
    )}
    {props.errors[props.id] && props.touched[props.id] && (
      <div className="input-feedback">{props.errors[props.id]}</div>
    )}
  </React.Fragment>
);

export default TextInput;
