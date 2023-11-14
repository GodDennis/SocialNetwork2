import { Btn } from "../../../../components/Btn/Btn";
import s from "./ProfileForm.module.scss";

type ProfileFormPropsType = {
  addNewPost: () => void;
  addNewPostText: (value: string) => void;
  newPostText: string;
};

export const ProfileForm = (props: ProfileFormPropsType) => {
  function onChangeHandler(value: string) {
    props.addNewPostText(value);
  }
  function onClickHandler() {
    props.addNewPost();
  }

  return (
    <div className={s.formWrapper}>
      <form action="">
        <h2 className={s.createPost}>My posts</h2>
        <div className={s.flexWrapper}>
          <textarea
            value={props.newPostText}
            className={s.postArea}
            onChange={(e) => {
              onChangeHandler(e.currentTarget.value);
            }}
            placeholder="Enter you text"
            name=""
            id=""
          />
          <Btn callback={onClickHandler} type="button" name="Send" />
        </div>
      </form>
    </div>
  );
};
