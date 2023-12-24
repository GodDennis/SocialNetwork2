import { ProfileHeader } from "./ProfileComponents/ProfileHeader/ProfileHeader";
import { MappedPost } from "./ProfileComponents/MappedPost";
import { ProfileForm } from "./ProfileComponents/ProfileForm";
import s from "./Profile.module.scss";
import { useEffect } from "react";
import { SetProfileTC } from "../../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../redux/redux";

export const Profile = () => {
    let { userID } = useParams<{ userID: string }>();

    const dispatch = useAppDispatch();
    useEffect(() => {
        userID && dispatch(SetProfileTC(userID));
    }, [userID]);

    return (
        <div>
            <ProfileHeader />
            <ProfileForm />
            <MappedPost />
        </div>
    );
};
