import { useState, useEffect, ChangeEvent } from "react";
import s from "./EditableStatus.module.scss";

type EditableStatusPropsType = {
    status: string;
    callback: (status: string) => void;
};

export const EditableStatus = (props: EditableStatusPropsType) => {
    const [value, setValue] = useState(props.status);
    const [editableMode, setEditableMode] = useState(true);

    const doubleClickHandler = () => {
        setEditableMode(false);
    };
    const onBlurHandler = (value: string) => {
        setEditableMode(true);
        props.callback(value);
    };
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    return (
        <>
            {editableMode ? (
                <span
                    className={(s.aboutMe, s.text)}
                    placeholder='status'
                    onDoubleClick={doubleClickHandler}>
                    {props.status === "" ? "Укажите ваш статус" : props.status}
                </span>
            ) : (
                <input
                    className={(s.text, s.textInput)}
                    onChange={onChangeHandler}
                    autoFocus
                    onBlur={() => onBlurHandler(value)}
                    placeholder={"status"}
                    value={value}
                    type='text'
                />
            )}
        </>
    );
};
