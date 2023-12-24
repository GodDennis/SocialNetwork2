import { RootStateOrAny, useSelector } from "react-redux";
import s from "./ProfileInfo.module.scss";
import { RootStoreType, useAppDispatch } from "../../../../../../redux/redux";
import { profileType } from "../../../../../../types";
import photoNull from "../../../../../../assets/camera_200.png";
import { EditableStatus } from "../../../../../../components/EditableStatus/EditableStatus";
import { GetStatusTC, SetStatusTC } from "../../../../../../redux/profile-reducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProfileInfo: React.FC = () => {
    const profile = useSelector<RootStoreType, profileType>(state => state.profilePage.profileInfo);

    const dispatch = useAppDispatch();
    useEffect(() => {
        profile.userId && dispatch(GetStatusTC(profile.userId));
    }, [profile.userId]);

    const StatusHandler = (status: string) => {
        dispatch(SetStatusTC(status));
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
                    <div className={s.subWrapper}>
                        <EditableStatus
                            // callback={() => {}}
                            callback={StatusHandler}
                            status={profile.status}
                        />
                    </div>
                    <div className={s.subWrapper}>
                        <img
                            className={s.icon}
                            src='https://img.freepik.com/free-icon/exclamation_318-448523.jpg?t=st=1685792496~exp=1685793096~hmac=5334bc2345ebb16ae2611f39af274a6aab7318b57a3696a1e6231342f16244ee'
                            alt=''
                            width='20px'
                        />
                        <span className={(s.info, s.text)}>Подробнее</span>
                    </div>
                </div>
            </div>
            <div className={s.headerActions}>
                <button className={s.btn}>Редактировать профиль</button>
                <button className={s.btn}>Еще</button>
            </div>
        </div>
    );
};
