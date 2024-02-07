import { useDispatch, useSelector } from "react-redux";
import { Btn } from "../../../../components/Btn/Btn";
import s from "./ProfileForm.module.scss";
import { AddNewPostTextAC, AddPostAC } from "../../../../redux/profile-reducer";
import { newPostTextSelector } from "../../../../selectors";

export const ProfileForm = () => {
    const newPostText = useSelector(newPostTextSelector);
    const dispatch = useDispatch();

    const onChangeHandler = (value: string) => {
        dispatch(AddNewPostTextAC(value));
    };

    const onClickHandler = () => {
        dispatch(AddPostAC());
    };

    return (
        <div className={s.formWrapper}>
            <form action=''>
                <div className={s.flexWrapper}>
                    <textarea
                        value={newPostText}
                        className={s.postArea}
                        onChange={e => {
                            onChangeHandler(e.currentTarget.value);
                        }}
                        placeholder='Введите текст'
                        name=''
                        id=''
                    />
                    <Btn
                        callback={onClickHandler}
                        type='button'
                        name='Отправить'
                        className={s.BtnPosition}
                    />
                </div>
            </form>
        </div>
    );
};
