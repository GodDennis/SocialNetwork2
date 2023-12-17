import s from "./BackgroundImage.module.scss";

export const BackgroundImage = () => {
  return (
    <div className={s.background}>
      <button className={s.change}>
        <span>
          <img
            className={s.pen}
            src="https://cdn-icons-png.flaticon.com/512/420/420365.png?w=826&t=st=1685587267~exp=1685587867~hmac=7cc1627c8dbe997df4306d196b2df62460e62fc018b4282d565ec5b4d18fe2a9"
            alt=""
          />
        </span>
        <span>Изменить обложку</span>
      </button>
    </div>
  );
};
