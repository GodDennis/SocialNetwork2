import s from "./ProfileInfo.module.scss";

type ProfileInfoType = {
  fullName: string;
  birthday: string;
  country: string;
  education: string;
  webSite: string;
  text?: string;
};

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
  return (
    <div className={s.flexWrapper}>
      <div>
        <img
          src="https://sun9-75.userapi.com/impg/teTw8UF6zBSgt_IvJzVz-wvsKQwNWQupF25QUg/jl790zKnAaM.jpg?size=1200x1600&quality=96&sign=278ffd6e454d0a67972d1ef3387635be&type=album"
          alt=""
        />
      </div>
      <div>
        <h1>{props.fullName}</h1>
        <div className={s.accountInfo}>
          <span>Date of Birth: {props.birthday}</span>
          <span>City: {props.country}</span>
          <span>Education: {props.education}</span>
          <span>Web Site: {props.webSite}</span>
        </div>
      </div>
    </div>
  );
};
