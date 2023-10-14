// import s from "./Post.module.scss";

import s from "./Post.module.scss";

type PostPropsType = {
  id?: number;
  src?: string;
  fullName?: string;
  time?: string;
  post?: string;
  like?: number | string;
  // coments?: number;
  // reply?: number;
};

export function Post(props: PostPropsType) {
  return (
    <div key={props.id} className={s.post}>
      <div className={s.postHeader}>
        <div className={s.avatar}>
          <img className={s.avatar__item} src={props.src} alt="" />
        </div>
        <div>
          <div className={s.naming}>
            <span className={s.name}>{props.fullName}</span>
          </div>
          <div>
            <span className={s.time}>{props.time}</span>
          </div>
        </div>
      </div>
      <div className={s.postInfo}>
        <div>{props.post}</div>
      </div>
      <div className={s.postActions}>
        <div className={s.btn}>
          <span className={s.icon}>
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <path d="M0 0h24v24H0z"></path>
                <path
                  d="M16 4a5.95 5.95 0 0 0-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 0 0 7.73 4 5.73 5.73 0 0 0 2 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0 0 16.27 4zm.27 1.8a3.93 3.93 0 0 1 3.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 0 1-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 0 1 7.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 0 0 1.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z"
                  fill="currentColor"
                  fillRule="nonzero"></path>
              </g>
            </svg>
          </span>
          <span className={s.like__count}>{props.like}</span>
        </div>
      </div>
    </div>
  );
}

// type ProfilePropsType = {
//   text: string;
// };

// export const Post: React.FC<ProfilePropsType> = (props) => {
//   return (
//     <div className={s.postWrapper}>
//       <img
//         src="https://sun9-75.userapi.com/impg/teTw8UF6zBSgt_IvJzVz-wvsKQwNWQupF25QUg/jl790zKnAaM.jpg?size=1200x1600&quality=96&sign=278ffd6e454d0a67972d1ef3387635be&type=album"
//         alt=""
//         width={"60px"}
//       />
//       <p>{props.text}</p>
//     </div>
//   );
// };
