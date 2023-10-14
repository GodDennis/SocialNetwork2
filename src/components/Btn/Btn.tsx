import s from "./Btn.module.scss";
type BtnType = {
  type: "button" | "submit" | "reset" | undefined;
  name: string;
  callback: () => void;
};

export const Btn: React.FC<BtnType> = (props) => {
  const handler = () => {
    props.callback();
  };
  return (

      <button className={s.btn} onClick={handler} type={props.type}>
        {props.name}
      </button>
  );
};
