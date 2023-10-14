import s from "./BackgroundImage.module.scss";

export const BackgroundImage = () => {
  return (
    <div className={s.imgWrapper}>
      <img
        src="https://i.pinimg.com/1200x/8a/c5/f7/8ac5f70cc13b93b635ca1d15b6ca658a.jpg"
        alt=""
        width={"100%"}
      />
    </div>
  );
};
