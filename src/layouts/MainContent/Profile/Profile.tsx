import { ProfileHeader } from "./ProfileComponents/ProfileHeader/ProfileHeader";
import { MappedPost } from "./ProfileComponents/MappedPost";
import { ProfileForm } from "./ProfileComponents/ProfileForm";
import s from "./Profile.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SetProfileInfoAC } from "../../../redux/profile-reducer";
import { useParams } from "react-router-dom";
import { getProfileInfo } from "../../../dal/api";

export const Profile = () => {
  let { userID } = useParams<{ userID: string }>();

  const dispatch = useDispatch();
  useEffect(() => {
    getProfileInfo(userID).then((res) => {
      dispatch(SetProfileInfoAC(res.data));
    });
  }, [userID]);

  return (
    <div>
      <ProfileHeader />
      <ProfileForm />
      <MappedPost />
    </div>
  );
};
