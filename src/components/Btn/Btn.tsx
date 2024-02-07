import s from "./Btn.module.scss";
type BtnType = {
    type: "button" | "submit" | "reset" | undefined;
    name: string;
    disabled?: boolean;
    className?: string;
    callback: () => void;
};

export const Btn: React.FC<BtnType> = props => {
    const handler = () => {
        props.callback();
    };
    return (
        <button
            disabled={props.disabled}
            className={s.btn + " " + props.className}
            onClick={handler}
            type={props.type}>
            {props.name}
        </button>
    );
};
