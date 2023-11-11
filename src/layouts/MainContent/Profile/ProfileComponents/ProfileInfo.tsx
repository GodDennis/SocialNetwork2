import s from "./ProfileInfo.module.scss";

type ProfileInfoType = {
  src: string;
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
        <img src={props.src} alt="" />
      </div>
      <div>
        <h1>{props.fullName}</h1>
        <div className={s.accountInfo}>
          <span>Date of Birth: {props.birthday}</span>
          <span>City: {props.country}</span>
          <span>Education: {props.education}</span>
          <span>
            Web Site: <a href={`${props.webSite}`}>Git</a>
          </span>
        </div>
      </div>
    </div>
  );
};
