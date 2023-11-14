import { ChangeEvent, KeyboardEvent, useRef } from "react";
import s from "./Input.module.scss";

type InputPropsType = {
  type?: string;
  value: string;
  className: string;
  newMessageTxt: string;
  placeholder?: string;
  onKeyDownHandler: (value: string) => void;
  callback: (value: string) => void;
};

export const Input = (props: InputPropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      inputRef.current && props.onKeyDownHandler(props.newMessageTxt);
    }
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.callback(e.currentTarget.value);
  };
  return (
    <input
      ref={inputRef}
      value={props.value}
      onChange={onChangeHandler}
      type={props.type || "text"}
      onKeyDown={onKeyDownHandler}
      placeholder={props.placeholder}
      className={`${s.input + " " + props.className}`}
    />
  );
};
