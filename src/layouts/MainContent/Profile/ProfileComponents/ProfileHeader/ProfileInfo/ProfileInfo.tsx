import { useSelector } from "react-redux";
import s from "./ProfileInfo.module.scss";
import { useAppDispatch } from "../../../../../../redux/redux";
import photoNull from "../../../../../../assets/camera_200.png";
import { EditableStatus } from "../../../../../../components/EditableStatus/EditableStatus";
import { SetStatusTC } from "../../../../../../redux/profile-reducer";
import { authIDSelector, profileSelector } from "../../../../../../selectors";

export const ProfileInfo: React.FC = () => {
    const profile = useSelector(profileSelector);
    const authID = useSelector(authIDSelector);

    const dispatch = useAppDispatch();

    const StatusHandler = (status: string) => {
        if (authID === profile.userId) {
            dispatch(SetStatusTC(status));
        }
        return;
    };

    return (
        <div className={s.person}>
            <span className={s.avatar}>
                <img
                    className={s.avatar__item}
                    src={profile.photos.small === null ? photoNull : profile.photos.small}
                    alt=''
                />
            </span>
            <div className={s.personInfo}>
                <div>
                    <span className={s.name}>{profile.fullName}</span>
                </div>
                <div className={s.userProperty}>
                    <div
                        className={s.subWrapper}
                        title='статус изменяемый на двойной клик'>
                        {profile.status && (
                            <img
                                className={s.icon}
                                src='https://img.freepik.com/free-icon/exclamation_318-448523.jpg?t=st=1685792496~exp=1685793096~hmac=5334bc2345ebb16ae2611f39af274a6aab7318b57a3696a1e6231342f16244ee'
                                alt=''
                                width='20px'
                            />
                        )}
                        <EditableStatus
                            disable={authID === profile.userId}
                            callback={StatusHandler}
                            status={profile.status}
                        />
                    </div>
                </div>
            </div>

            <div className={s.headerActions}>
                {authID === profile.userId && (
                    <>
                        <button
                            disabled
                            title='disabled'
                            className={s.btn}>
                            Редактировать профиль
                        </button>
                        <button
                            disabled
                            title='disabled'
                            className={s.btn}>
                            Еще
                        </button>
                    </>
                )}
            </div>
            {authID !== profile.userId && (
                <button className={s.btn + " " + s.blue}>Отправить сообщение</button>
            )}
        </div>
    );
};
