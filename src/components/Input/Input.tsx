import { ChangeEvent, KeyboardEvent, useRef } from "react";
import s from "./Input.module.scss";
import { messageInfoPropsType } from "../../store";

type InputPropsType = {
  newMessageTxt: string;
  className: string;
  onKeyDownHandler: (value: string) => void;
  callback: (value: string) => void;
  placeholder?: string;
  type?: string;
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
      onKeyDown={onKeyDownHandler}
      ref={inputRef}
      className={`${s.input + " " + props.className}`}
      type={props.type || "text"}
      onChange={onChangeHandler}
      placeholder={props.placeholder}
    />
  );
};
