import { useDispatch, useSelector } from "react-redux";
import { Btn } from "../../../../components/Btn/Btn";
import s from "./ProfileForm.module.scss";
import { AddNewPostTextAC, AddPostAC } from "../../../../redux/profile-reducer";
import { RootStoreType } from "../../../../redux/redux";

export const ProfileForm = () => {
  const newPostText = useSelector<RootStoreType, string>(
    (state) => state.profilePage.newPostText
  );
  const dispatch = useDispatch();

  const onChangeHandler = (value: string) => {
    dispatch(AddNewPostTextAC(value));
  };

  const onClickHandler = () => {
    dispatch(AddPostAC());
  };

  return (
    <div className={s.formWrapper}>
      <form action="">
        <h2 className={s.createPost}>My posts</h2>
        <div className={s.flexWrapper}>
          <textarea
            value={newPostText}
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
